import React, { useState } from 'react';
import { Provider, useSelector, useDispatch} from 'react-redux';
import { toggleDropdown, AppDispatch, closeAllDropdowns } from '../store/store.ts';
import {Dropdown, ContestStatus, Icon2} from './Dropdown'

export default function ShowContests() {
  const [showForm, setShowForm] = useState(false)

  return (

    <div>
      <div style={{'marginLeft':'5em', 'marginTop': '5em', 'color': '#6F6F6F'}}> Showing 830 contests </div>
          <div id="contests"> </div>
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
    </div>
  )
}
