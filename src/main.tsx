import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { GlobalStyle } from './style.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/no" element= { <App language="no" /> } />
        <Route path="/en" element={ <App language="en" /> } /> 
        <Route path="*" element={ <Navigate to="/no" replace /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
