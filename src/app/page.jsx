"use client"
import { useState } from 'react';
import Image from "next/image"
import logo from "/public/icons/logo.png"
import dataUser from '/public/Data/dataUser.json'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  const handleLogin = () => {
    const user = dataUser.find(u => u.nim === nim);

    if (user) {
      if (user.password === password) {
        handleSuccessfulLogin(user.role);
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('User not found');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const handleSuccessfulLogin = (role) => {
    switch (role) {
      case 'mahasiswa':
        router.push('/Mahasiswa')
        break;
      case 'admin':
        router.push('/admin')
        break;
      case 'dosen':
        router.push('/dosen')
        break;
      default:
        console.error('Unknown role:', role);
    }
  };


  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="flex flex-col justify-center md:w-fit w-full p-5 ">
        <div className="flex flex-row gap-3 mb-10">
          <Image src={logo} width={30} height={20} alt="" />
          <h1 className="text-2xl font-bold">Sisempen</h1>
        </div>
        <h1 className="text-2xl font-bold mb-2 w-96">Welcome back</h1>
        <p className="text-sm mb-5">Start your website in seconds. Don’t have an account?
          <button className="text-blue-500 font-bold ml-2">Sign up</button>.
        </p>
        <div className="min-w-96">
          <p className="text-sm">Username</p>
          <input
            onChange={(e) => setNim(e.target.value)}
            type="text"
            className="border-2 rounded p-2 mb-5 w-full" />
        </div>
        <div className="min-w-96">
          <p className="text-sm">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="border-2 rounded p-2 w-full" />
        </div>
        <div className="min-w-96 flex flex-row justify-between mb-6 mt-3">
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p className="text-sm">Remember me</p>
          </div>
          <button className="text-xs cursor-pointer text-blue-600">Forgot Password?</button>
        </div>
        <button onClick={handleLogin} className="text-center bg-blue-500 text-white min-w-96 py-2 rounded mb-4">Log In</button>
        <button className="text-center border border-blue-500 text-blue-500 min-w-96 py-2 rounded">Sign Up</button>
        {error &&
          <p style={{ color: 'red' }} className='fixed w-96 right-8 top-5 bg-red-200 px-4 py-3 mt-2 text-md rounded'>{error}</p>
        }
      </div>
    </div>
  )
}

export default Page
