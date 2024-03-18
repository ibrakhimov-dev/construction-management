import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import axios from 'axios'
import { base_url, role_api_url } from '../components/API/baseURL'
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('accessToken');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    "Access-Control-Allow-Origin": base_url
  }

function Main() {

    const navigate = useNavigate()
    const role = localStorage.getItem('role');

    useEffect(() => {
            if(role === "admin"){
              navigate("/admin/dashboard")
            }else if (role === "user"){
              navigate("/user/cost")
            }else {
                navigate("/login") 
            }
      }, [])

  return (
    <>
        <Sidebar role={role}/>
    </>
  )
}

export default Main