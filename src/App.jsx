import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PreorderPage from './pages/PreorderPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/precommande" element={<PreorderPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
