import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/create">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </div>
  );
}

export default App;
