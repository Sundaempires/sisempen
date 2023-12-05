"use client"
import Image from "next/image"
import logo from "/public/icons/logo.png"
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [role, setRole] = useState([]);
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/useres`;
        const res = await fetch(url);
        const responseData = await res.json();

        if (Array.isArray(responseData.data)) {
          const username = responseData.data.map(item => item.attributes.username);
          const password = responseData.data.map(item => item.attributes.password);
          const role = responseData.data.map(item => item.attributes.role);

          setUsername(username);
          setRole(role);
          setPassword(password);
        } else {
          console.error('Invalid data format:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputUsername = (event) => {
    setInputUsername(event.target.value);
  };
  
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const handleLogin= (event) => {
    event.preventDefault();
    console.log(inputPassword, inputUsername)
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="bg-white drop-shadow-2xl p-3 py-8 rounded-lg border-2 border-gray-100">
        <div className="flex flex-row gap-3 mb-10">
          <Image src={logo} width={30} height={20} alt="" />
          <h1 className="text-2xl font-bold">Sisempen</h1>
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-sm mb-5">Start your website in seconds. Don’t have an account?
          <button className="text-blue-500 font-bold ml-2">Sign up</button>.
        </p>
        <div className="w-full">
          <p className="text-sm">Username</p>
          <input
            onChange={handleInputUsername}
            value={inputUsername}
            type="text"
            className="border-2 rounded p-2 mb-5 w-full" />
        </div>
        <div className="w-full">
          <p className="text-sm">Password</p>
          <input
            onChange={handleInputPassword}
            value={inputPassword}
            type="text"
            className="border-2 rounded p-2 w-full" />
        </div>
        <div className="flex flex-row justify-between mb-6 mt-3">
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p className="text-sm">Remember me</p>
          </div>
          <button className="text-xs cursor-pointer text-blue-600">Forgot Password?</button>
        </div>
        <button onClick={handleLogin} className="text-center bg-blue-500 text-white w-full py-2 rounded mb-4">Log In</button>
        <button className="text-center border border-blue-500 text-blue-500 w-full py-2 rounded">Sign Up</button>
      </div>
    </div>
  )
}

export default Page
