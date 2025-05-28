# Dependencies
source and activate the virtual environment
use pip install -r requirements.txt to install all dependencies
npm install

# Postgres
install postgres with the command
```
sudo apt install postgresql postgresql-contrib -y
```

Then initialize the database with
```
sudo -u postgres psql
CREATE DATABASE mydb
ALTER USER postgres WITH PASSWORD 'password';
\q
sudo -u postgres psql -d mydb
\i contests.sql
\q
```

# Run server
Run
```
uvicorn main:app --host 0.0.0.0 --port 8000
```
In a separate window, run 
```
npm start
```
