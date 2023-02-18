import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home/Home'
import { Day } from './pages/Day/Day'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:id" element={<Day />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};