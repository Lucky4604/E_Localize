import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';








const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const handleSignUp = async () => {
        if (name === "" || email === "" || password === "") {
          return toast.error("All fields are required");
        }
      
        try {
          const users = await createUserWithEmailAndPassword(auth, email, password);
          console.log(users);
      
          const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            time: Timestamp.now(),
          };
      
          const userRef = collection(fireDB, "users");
          await addDoc(userRef, user);
      
          toast.success("Signup Successfully");
      
          // Redirect after a delay
          setTimeout(() => {
            setName("");
            setEmail("");
            setPassword("");
            window.location.href = '/login';
          }, 2000); // Adjust the time (in milliseconds) as needed
        } catch (error) {
          console.log(error);
          toast.error("Signup Failed");
        }
      };

   


   

  return (
    <div className=' flex justify-center items-center h-screen bg-gradient-to-r from-slate-300 to-slate-500'>
     
    <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
        <div className="">
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
        </div>
        <div>
            <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                name='name'
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='name'
            />
        </div>
        <div>
            <input type="email"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                name='email'
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Email'
            />
        </div>
        <div>
            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Password'
            />
        </div>
        <div className=' flex justify-center mb-3'>
            <button 
                onClick={handleSignUp}
                className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                Signup
            </button>
        </div>
        <div>
            <h2 className='text-white'>Already have  an account ? <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
        </div>
    </div>
</div>
  )
}

export default SignUp