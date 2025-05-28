import React, { useState } from 'react';
import { Provider, useSelector, useDispatch} from 'react-redux';
import { toggleDropdown, AppDispatch, closeAllDropdowns } from '../store/store.ts';
import {Dropdown, ContestStatus, Icon2} from './Dropdown'

export default function BrowserContests() {


  return (
    <div>
      <div style={{ marginLeft: '1.8em', marginTop: '.8em', fontSize: '2.5em' }}>
        Browse Contests
      </div>

      <div
        style={{
          marginTop: '1.3em',
          marginBottom: '3em',
          backgroundColor: '#9DCDCD',
          width: '100%',
          height: '0.7em',
        }}
      ></div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2em' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5.5em' }}>
          <Dropdown
            label="ALL CATEGORIES"
            options={["ALL CATEGORIES", "CATEGORY1", "CATEGORY2"]}
          />

          <div style={{ marginTop: '.7em', marginLeft: '1em', fontSize: '1.3em' }}>
            CONTEST STATUS
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1em',
              gap: '1.5em',
            }}
          >
            <ContestStatus label="Open" />
            <ContestStatus label="Finished" />
          </div>
        </div>
        <Dropdown
            label="ALL INDUSTRIES"
            options={["ALL INDUSTRIES", "INDUSTRY1", "INDUSTRY2"]}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div className="midtext" style={{ textAlign: 'center' }}>
            KEYWORDS
          </div>
          <form>
            <input type="search" placeholder="KEYWORDS..." />
          </form>
          <div style={{ textAlign: 'center', fontSize: '1.3em' }}>ORDER</div>
          <Dropdown
            label="ORDER1"
            options={["ORDER1", "ORDER2", "ORDER3"]}
          />
        </div>
        <Dropdown
            label="CONTEST LEVELS"
            options={["CONTEST LEVELS", "LEVEL1", "LEVEL2"]}
          />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="midtext" style={{ marginLeft: '2em', marginBottom: '.6em' }}>
            CONTEST TYPES
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                <Icon2 position='0 0' />
                <Icon2 position='-50px 0px' />
              </div>
              <div style={{ marginLeft: '2.4em' }}>Blind</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                <Icon2 position = '-100px 0' />
                <Icon2 position = '-150px 0' />
              </div>
              <div style={{ marginLeft: '.6em' }}>Guaranteed</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '1em', marginRight: '6.5em' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                <Icon2 position = '0 -50px' />
                <Icon2 position = '-50px -50px' />
              </div>
              <div style={{ marginLeft: '.4em' }}>Fast-Tracked</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                <Icon2 position='-100px -50px' />
                <Icon2 position = '-150px -50px' />
              </div>
              <div style={{ marginLeft: '2em' }}>Private</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
