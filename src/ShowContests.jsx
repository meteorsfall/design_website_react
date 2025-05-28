import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch} from 'react-redux';
import { toggleDropdown, closeAllDropdowns } from '../store/store';
import {Dropdown, ContestStatus, Icon2} from './Dropdown'

export default function ShowContests() {
  const [contests, setContests] = useState([]);
  //for the poll button
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/contests.json')
        .then(r => r.json())
        .then(data => {
            const contests = data
            console.log(contests);
            setContests(contests)
        })
        .catch(error => console.error('Error:', error));
  }, []);

  function WatchButton() {
    const[watching, setWatching] = useState(false)
    return (
      <div className="small-button turn-dark watch" onClick={() => setWatching(!watching)} style={{'width' : '4em', 'color': '#000000'}}>
        {watching ? 'Watching' : 'Watch'}
      </div>
    )
  }

  function ContestCard({contest}) {
    return (
      <>
        <hr style={{'marginLeft':'5em', 'marginRight':'5em', 'marginTop':'1em', 'marginBottom':'0em'}} />
          <div
            className="message"
            style={{
              'display': 'flex',
              'flexDirection': 'row',
              'marginLeft':'5em',
              'marginRight': '5em',
              'marginTop': '0em',
              'marginBottom': '0em',
              'gap': '1em',
              'borderBottom': '1px solid #6F6F6F',
              'padding': '1em 0'
            }}>
            <div className="nodesign" style={{'backgroundColor': 'white'}}> </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '40em', gap: '.4em'}}>
              <h1 style={{'marginTop': '.5em'}}> {contest.title} </h1>
              <p style={{color: '#6F6F6F', 'marginTop': '0em', 'marginBottom' :'0em'}}> {
            contest.description} </p>
              <p style={{'color': '#6F6F6F'}}> <i> {contest.author} </i> </p>
              <div style={{'display': 'flex', 'flexDirection': 'row', 'gap': '1em'}}>
                {contest.tags.map((tag, i) => (
                  <div key={i} className={`small-button ${i == 0 ? 'boxHighlight' : ''}`}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '1.5em', 'color': '#6F6F6F', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': '5em'}}>
              <div style={{'display': 'flex', 'flexDirection': 'row', 'gap': '1em'}}>
                <i className="fa-regular fa-image"> </i>
                <div className="gray-text"> 0 designs </div>
              </div>
              <div style={{'display' : 'flex', 'flexDirection': 'row', 'gap': '1em'}}>
                <i className="fa-regular fa-clock"> </i>
                <div> 4 days </div>
              </div>
              <div style={{'display':'flex', 'flexDirection': 'row', 'gap': '1em'}}>
                <i className="fa-solid fa-comment"> </i>
                <div> No feedback </div>
              </div>
              <WatchButton />
            </div>
          </div>

      </>
    )
  }

  function AddPostForm({ onSuccess }){
    const [form, setForm] = useState({
      title: '',
      author: '',
      description: ''
    });

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }

  }

  return (

    <>
      <div style={{'marginLeft':'5em', 'marginTop': '5em', 'color': '#6F6F6F'}}> Showing 830 contests </div>
    <div id="contests">
      {contests.map((contest, i) => (
        <ContestCard key={i} contest= {contest} />
      ))}
    </div>
    <div
      className = "small-button"
      id="add-post-button"
      onClick={() => setShowForm(true)}
      style={{
        'marginLeft': '50%',
        'marginTop': '5em',
          'width': '100px'
      }}>
          Add Post
    </div>
    <div id="add-post-form" style={{'marginTop': '5em', 'marginLeft': '45%', 'display': showForm ? 'block' : 'none'}}>
            <form action="http://localhost:8000/submit" method="post">
              <label htmlFor="title">Title</label><br />
              <input type="text" id="title" name="title" /><br />
              <label htmlFor="author">Author</label> <br />
              <input type="text" id="author" name="author" /><br />
              <label htmlFor="description">Description</label><br />
              <input type="text" id="description" name="description" /><br /> <br />
              <input type="submit" value="Post" />
            </form>
          </div>
    </>
  )
}
