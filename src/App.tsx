import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import './App.css';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilNexus />
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  );
}

export default App;
