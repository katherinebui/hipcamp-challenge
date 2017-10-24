import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div className='app'>
    <div className='landing'>
      <h1>Camp Features</h1>
    </div>
  </div>
  );

render(<App />, document.querySelector('.features'));
