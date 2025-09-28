import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth";
import {login, logout} from "./features/authSlice"
import "./App.css" ;

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if (userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=> setLoading(false))
  }, [])
  return !loading ? (
    <div className="min-h-sc ">test</div>
  ) : null
}

export default App
