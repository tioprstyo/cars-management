import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  );
}

export default App;
