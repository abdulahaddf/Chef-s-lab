import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        console.log("signOut successfully");
      })
      .catch((err) => console.log(err));
  };

  const provider = new GoogleAuthProvider();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // Navigate(to="/",{replace: true})
        <Navigate to="/" replace={true}/>
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const gitProvider = new GithubAuthProvider();
  const signInGit = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile)

}
  //observe auth state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('auth state changed', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // const updateProfile = (user, name, url) => {
  //   updateProfile(user, {
  //    displayName:name,
  //   photoURL:url,
  //  })}

console.log(auth,user);
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    signInGoogle,
    signInGit,
    loading,
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
