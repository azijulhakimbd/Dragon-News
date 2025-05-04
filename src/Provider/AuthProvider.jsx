import React, { createContext, useState } from "react";
const FirebaseAuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    Name: "bablu",
    email: "bablu@gmail.com",
  });
  const userData = {
    user,
    setUser,
  };
  return <AuthProvider value={userData}>
    {children}
  </AuthProvider>;
};

export default AuthProvider;
