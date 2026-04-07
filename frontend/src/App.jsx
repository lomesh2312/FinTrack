import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Dashboard/Home"
import Income from "./pages/Dashboard/Income"
import Expense from "./pages/Dashboard/Expense"
import AiAgent from "./pages/Dashboard/AiAgent"
import { UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/ai-agent" element={<AiAgent />} />
        </Routes>
      </Router>
      <Toaster 
        toastOptions={{
          style: { fontSize: "13px" },
        }}
      />
    </UserProvider>
  );
}

export default App;
