import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';
import Schedule from './components/schedule';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/schedule" component={Schedule} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}