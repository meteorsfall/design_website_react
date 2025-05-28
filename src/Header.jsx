// Header.jsx
import React from 'react';

export default function Header() {
  const showMessages = () => {
    const messages = document.getElementById('messages');
    if (messages) {
      messages.style.display = messages.style.display === 'none' ? 'flex' : 'none';
    }
  };

  const message = (showBorder) => (
    <div
        className="message"
        id="message"
    style={{ display: 'flex', flexDirection: 'row',
        borderBottom: showBorder ? '1px solid black' : '0px' }}
      >
        <div style={{ margin: '1em .85em .6em .65em' }}>
          <img src="https://npip99.github.io/images/nodesign.png" alt="notification" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '.7em',
            gap: '1em',
            fontSize: '.85em',
          }}
        >
          <div style={{ fontWeight: 550 }}>rob22922 declined your request</div>
          <div style={{ color: 'gray' }}>25 minutes ago</div>
        </div>
      </div>

  )
  return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1em', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
          <a href="#">
            <div style={{ marginLeft: '4.5em', padding: '1.7em 1em', backgroundColor: '#2C3D51' }}>
              <img
                src="https://npip99.github.io/images/logo3.png"
                width="125"
                height="auto"
                alt="Logo"
              />
            </div>
          </a>
          <div className="pages">
            <div style={{ display: 'flex', flexDirection: 'row', gap: '.2em' }}>
              <a href="index.html">
                <h1>Home</h1>
                <img src="https://npip99.github.io/images/arrow.png" className="icon" alt="Arrow" />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '.2em' }}>
              <a href="#">
                <h1>Your Work</h1>
                <img src="https://npip99.github.io/images/arrow.png" className="icon" alt="Arrow" />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '.2em' }}>
              <a href="#">
                <h1>Clients</h1>
                <img src="https://npip99.github.io/images/arrow.png" className="icon" alt="Arrow" />
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5em',
            alignItems: 'center',
            paddingRight: '8em',
          }}
        >
          <a href="#">
            <i className="fa-solid fa-envelope fa-2x" style={{ color: '#2C3D51' }}></i>
          </a>
          <div className="parent" style={{ position: 'relative' }}>
            <a href="#">
              <i
                className="fa-solid fa-bell fa-2x"
                onClick={showMessages}
                style={{ color: '#2C3D51', cursor: 'pointer' }}
              ></i>
            </a>
            <div
              className="child"
              id="messages"
              style={{
                display: 'none',
                flexDirection: 'column',
                position: 'absolute',
                right: '-2.9em',
                top: '4.1em',
                width: '390px',
                height: '275px',
                border: '1px solid black',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                zIndex: 1,
              }}
            >
              {message(true)}
              {message(true)}
              {message(false)}
            </div>
          </div>
          <a href="#">
            <i className="fa-solid fa-user-circle fa-4x" style={{ color: '#2C3D51' }}></i>
          </a>
        </div>
      </div>
  );
}
