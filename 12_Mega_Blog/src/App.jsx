import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth";
import {login, logout} from "./features/authSlice"
import "./App.css" ;
import { Outlet } from "react-router-dom";

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
    <div className="min-h-screen flex flex-warp content-between bg-gray-400">
      <div className="w-full block ">
        <Header/>
        <main>
        <Outlet/>
        </main>
      </div>
    </div>
  ) : null
}

export default App
