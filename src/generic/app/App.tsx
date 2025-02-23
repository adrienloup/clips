import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from '@/src/pages/game/Game.page.tsx';
import '@/src/generic/app/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/clips/*"
          element={<GamePage />}
        />
        <Route
          path="/clips/"
          element={<GamePage />}
        />
        <Route
          path="/*"
          element={<GamePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
