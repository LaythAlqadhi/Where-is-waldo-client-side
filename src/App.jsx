import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Message from './components/Message/Message';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import NotFound from './pages/NotFound/NotFound';
import Timer from './components/Timer/Timer';
import { GameProvider } from './GameContext';
import './App.css';

export default function App() {
  return (
    <GameProvider>
      <Loading />
      <Message />
      <Header timer={<Timer />} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </GameProvider>
  );
}
