import { useState } from 'preact/hooks'
import { Router } from "preact-router";
import './app.css'

import Home from "./routes/home";
import Clock from "./routes/clock";
import Todo from "./routes/todo";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div class='App'>
      <div class="navbar">
        <a href="/todo">Todo</a>
        <a href="/">Home</a>
        <a href="/clock">Clock</a>
      </div>
      <Router onChange={this.handleRoute}>
        <Home path="/" />
        <Clock path="/clock" />
        <Todo path="/todo" />
        {/* <Win path="/win" /> */}
      </Router>
    </div>
  )
}
