import { Routes, Route, Navigate } from "react-router-dom";
import { Graficas, Auth } from "@/layouts";
import { useState } from "react";

function App() {
  
  const [inSession, setinSession] = useState(sessionStorage.getItem('inLogin'));
  
  return (
    <Routes>
      <Route path="/graficas/*" element={<Graficas />} />
      <Route path="/auth/*" element={<Auth />} />
      {
        inSession ? 
        <Route path="*" element={<Navigate to="/graficas/home" replace />} /> : 
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      }
      
    </Routes>
  );
}

export default App;
