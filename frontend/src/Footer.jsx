import React from 'react';

export default function Footer(){

  const page_link = (text) => (
    <div>
      <a href = "#" >
        <p> {text} </p>
      </a>
    </div>
  )

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
      marginTop: '3em',
      marginBottom: '0em',
      paddingBottom: '0em',
      backgroundColor: '#2C3D51',
        alignItems: 'center'
    }}>
        <div style={{marginTop: '2em'}}>
    <img src="https://npip99.github.io/images/logo2.png" height='43px' style={{width:'auto'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '.7em', marginTop: '1em'}}>
          <a href = "#">
            <div className="socials" style={{backgroundPosition: '0 0'}}>
              <div className="overlay"> </div>
            </div>
          </a>
          <a href = "#">
            <div className="socials" style={{backgroundPosition: '55px 0'}}>
              <div className="overlay"> </div>
            </div>
          </a>
          <a href = "#">
            <div className="socials" style={{backgroundPosition: '-110px 0'}}>
              <div className="overlay"> </div>
            </div>
          </a>
          <a href = "#">
            <div className="socials" style={{backgroundPosition: '-165px 0'}}>
              <div className="overlay"> </div>
            </div>
          </a>
          <a href = "#">
            <div className="socials" style={{backgroundPosition: '-220px 0'}}>
              <div className="overlay"> </div>
            </div>
          </a>
          <a href = "#">
            <div className="socials" style={{backgroundPosition: '-275px 0'}}>
              <div className="overlay"> </div>
            </div>
          </a>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.6em',
          marginBottom: '0em',
          color: '#FFFFFF',
          fontSize: '1.3em'}}>
          {page_link("HOME")}
          <p> | </p>
          {page_link("JOBS")}
          <p> | </p>
          {page_link("LOGIN")}
          <p> | </p>
          {page_link("REGISTER")}
        </div>
      </div>
  );
}
