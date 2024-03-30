import React from 'react';
import { createRoot } from 'react-dom/client';
import   App   from './imports/ui/App';
import  Home  from './imports/ui/Home.jsx'
import "./main.scss";

  const container = document.getElementById('target');
  
  const root = createRoot(container);
  root.render(<Home/>);

