import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from '../Dashboard/MovieDetail';
import Posters from '../Dashboard/Posters';


function Dashboard() {
  return (
    <Posters />
  );
}

export default Dashboard;