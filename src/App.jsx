import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PreorderPage from './pages/PreorderPage';
import SteamPage from './pages/SteamPage';
import EpicPage from './pages/EpicPage';
import NintendoPage from './pages/NintendoPage';
import PlayStationPage from './pages/PlayStationPage';
import XboxPage from './pages/XboxPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/precommande" element={<PreorderPage />} />
      <Route path="/steam" element={<SteamPage />} />
      <Route path="/epic" element={<EpicPage />} />
      <Route path="/nintendo" element={<NintendoPage />} />
      <Route path="/playstation" element={<PlayStationPage />} />
      <Route path="/xbox" element={<XboxPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
