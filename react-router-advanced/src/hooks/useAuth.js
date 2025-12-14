// src/hooks/useAuth.js
import { useState } from "react";

const useAuth = () => {
  // Simulate a logged-in user (change to true to simulate login)
  const [isAuthenticated] = useState(false);
  return { isAuthenticated };
};

export default useAuth;
