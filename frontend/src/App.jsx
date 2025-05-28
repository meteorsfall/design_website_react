import React, {useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import BrowserContests from "./BrowserContests";
import ShowContests from "./ShowContests";
import {Dropdown} from "./Dropdown";
import { useDispatch } from 'react-redux';
import { store, closeAllDropdowns} from '../store/store';


export default function App() {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(closeAllDropdowns())} style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />;
      <BrowserContests/>;
      <ShowContests/>;
      <Footer />;
    </div>
  );
}
