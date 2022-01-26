import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
// import {} from 'react-router';

import HomeComponent from "./components/home.component";
import BookDetailsComponent from "./components/bookDetails.component";
import BooksComponent from "./components/books.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/books" element={<BooksComponent/>} />
        <Route path="/books/:bookId" element={<BookDetailsComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
