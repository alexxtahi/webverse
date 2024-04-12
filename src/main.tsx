import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import { NextUIProvider } from "@nextui-org/react";
import "bootstrap-icons/font/bootstrap-icons.css";

// Fix the issue : global is not defined
// Solver: https://github.com/donavon/use-dark-mode/issues/91#issuecomment-1574779040
window.global = globalThis;

// Root rendering
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
