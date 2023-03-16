import React from 'react'
import './App.css'
import { Header } from "./components/Header";
import {QuestionList} from "./components/QuestionList";
import {ContentWrapper} from "./components/ContentWrapper";
import { Footer } from './components/Footer';

function App() {

  return (
      <div className="app">
          <Header title="Creating" />
          <ContentWrapper />
          <Footer />
      </div>
  );
}

export default App
