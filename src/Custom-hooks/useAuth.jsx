import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  return { currentUser };
};

export default useAuth;
