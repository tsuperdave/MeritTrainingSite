import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export const AuthorizationContext = createContext();

export const AuthorizationProvider = (props) => {
    const [user, setUser] = useState({
      name: '',
      role: '',
      isLoggedIn: false
})
    return (
        <AuthorizationContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthorizationContext.Provider>
    )
};

export const requireAuth = (Component) => {
    return (props) => {
      // Get authenticated user
      const [user, setUser] = useContext(AuthorizationContext);
      const history = useHistory();
      
      useEffect(() => {
        // Redirect if not signed in
        if (user.isLoggedIn === false) {
          history.replace("/login");
          console.log("history redirect from auth.js")
        }
      }, [user]);
  
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