import { useNavigate } from "react-router";
import {useAuthStore}


export default function LoginPage() {
    const login = useAuthStore((s)=>s.login)
    const nav = useNavigate()
  return (
    <div>
      
    </div>
  )
}
