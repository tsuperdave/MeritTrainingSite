import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const AuthorizationContext = createContext();

export const AuthorizationProvider = (props) => {
    const [auth, setAuth] = useState({
      username: '',
      role: '',
      isLoggedIn: false
})
    return (
        <AuthorizationContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthorizationContext.Provider>
    )
};

export const requireAuth = (Component) => {
    return (props) => {
      // Get authenticated user
      const [auth, setAuth] = useContext(AuthorizationContext);
      const history = useHistory();
      
      useEffect(() => {
        // Redirect if not signed in
        if (auth.isLoggedIn === false) {
          history.replace("/home");
        }
      }, [auth]);
  
      // Show loading indicator
      // We're either loading (user is null) or we're about to redirect (user is false)
    //   if (!auth.isLoggedIn) {
    //       console.log("Post auth: " + auth.jwt)
    //     return <PageLoader />;
    //   }
  
      // Render component now that we have user
      return <Component {...props} />;
    };
  };