import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Playlists from './components/Playlists';

function App() {
  return (
    <main className="container">
      <article>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/playlists" element={<Playlists />} />
          </Routes>
        </BrowserRouter>
      </article>
    </main>
  );
}

export default App;
