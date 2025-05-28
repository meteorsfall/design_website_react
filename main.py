from fastapi import FastAPI, Response, Request, Form, Depends
from fastapi.middleware.cors import CORSMiddleware
import json
import os
from pydantic import BaseModel
from typing import List
import psycopg

DATABASE_URL = "postgresql://postgres:password@localhost/mydb"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContestIn(BaseModel):
    title: str
    author: str
    description: str
    tags: List[str]
    designs: int
    days: int

class ContestOut(ContestIn):
    pass

def get_connection():
    return psycopg.connect(DATABASE_URL)

@app.get("/index.html")
def get_index_html():
    return Response(open("index.html").read(), media_type="text/html")

@app.get("/index.css")
def get_index_css():
    return Response(open("index.css").read(), media_type="text/css")

@app.get("/index.js")
def get_index_js():
    return Response(open("index.js").read(), media_type="application/javascript")

@app.get("/contests.json", response_model=List[ContestOut])
def get_contests_json():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT title, author, description, tags, designs, days FROM contests;")
            rows = cur.fetchall()
            result = []
            for row in rows:
                result.append({
                    "title": row[0],
                    "author": row[1],
                    "description": row[2],
                    "tags": [tag.strip() for tag in row[3].split(',')],
                    "designs": row[4],
                    "days": row[5]
                })
            return result

@app.post("/submit")
async def submit(contest: ContestIn):
    tags_str = ",".join(contest.tags)
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO contests (title, author, description, tags, designs, days)
                VALUES (%s, %s, %s, %s, %s, %s)
            """, (contest.title, contest.author, contest.description, tags_str, contest.designs, contest.days))
            conn.commit()
    return {"message": "Contest added!"}
