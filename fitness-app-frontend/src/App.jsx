
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import { BrowserRouter as Router,Navigate,Route,Routes,useLocation } from "react-router";
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCredentials } from './store/authSlice';
import Box from '@mui/material/Box';

function App() {
  const {token, tokenData,logIn,logOut,isAuthenticated} = useContext(AuthContext)
  const dispatch = useDispatch();
  const [authReady,setAuthReady] = useState(false);
  useEffect(() =>{
    if(token){
      dispatch(setCredentials({token,user: token}))
      setAuthReady(true)
    }
  }, 
   [token, tokenData ,dispatch])

  return (
    <Router>
      {!token ? (<Button variant="contained" color="red" 
      onClick={()=>{
        logIn();
      }
      }
      >LOGIN </Button>) : ( 
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
      )}
      
    </Router>
  )
}

export default App
