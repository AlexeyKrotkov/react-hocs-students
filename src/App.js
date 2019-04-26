import React from 'react';
import {
  LandingPhotosWithoutHoc,
  LandingPhotosWithHoc,
  SimpleFormWithoutHoc,
  SimpleFormWithHoc
} from './components';
import { Indent } from './components/indent/indent';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Indent>
        <LandingPhotosWithoutHoc />
      </Indent>
      <Indent>
        <LandingPhotosWithHoc />
      </Indent>
      <Indent>
        <SimpleFormWithoutHoc />
      </Indent>
      <Indent>
        <SimpleFormWithHoc />
      </Indent>
    </div>
  );
}

export default App;
