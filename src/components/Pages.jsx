import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Saved from '../pages/Saved';

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </>
  );
};

export default Pages;
