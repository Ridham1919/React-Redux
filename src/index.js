import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import Home2 from './Home2';
import { Store2 } from './Store2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store={Store2}>
      <Home2/>
    </Provider>
);


