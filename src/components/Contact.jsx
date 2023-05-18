import { useRef, useState, useEffect, useContext } from "react";
import { AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import {BsTwitter, BsTiktok} from "react-icons/bs";
import { GoLocation } from "react-icons/go"
import emailjs from '@emailjs/browser';



const Input = ({ placeholder, name, type, value, onChange, error  }) => (
  <div>
  <input
   placeholder={placeholder}
   type={type}
   value={value}
   name={name}
   className={`block w-full my-4 rounded-sm p-2 outline-none bg-transparent border-none ${ error ? 'border-red-500' : 'white-glassmorphism' } text-sm`}
   onChange={(e) => {
    onChange(e);
    if (isEmail) {
      validate(e);
    }}}
   />
     {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
</div>
);

const isEmail = name === 'email';



const Contact = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  


  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);
    if (!regex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!message) {
        setErrorMessage('Please enter a message.');
        return;
    }
    if (!name) {
      setNameError('Please enter a name.');
      return;
    }
    console.log(form.current);
    emailjs.sendForm('service_a2ak0yq', 'template_otjfjjr', form.current, 'YdlBI0nJYqS7e2GW_')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setIsSent(true);
      });
    setName('');
    setNameError('');
    setEmail('');
    setEmailError('');
    setMessage('');
    setErrorMessage('');
  };
  
  if (isSent) {
        return (
          <div>
            <p className="sm:text-6xl text-[#0d0630] py-20 text-3xl text-center my-20 gothic break-words" style={{fontSize: "48px"}}>Thank you, your message was sent! <br /> We'll reach out to you soon.</p>
          </div>
          
        );}
  

  //FORM
  return (
<div className="flex w-full justify-center items-center mb-20 pb-12 pt-36 pr-12 pl-12">
      <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10 ml-10 items-start">
          <h1  className="sm:text-8xl text-[#0d0630] py-1 text-4xl gothic  justify-center items-center text-center">
          <span className="responsive-text">CONTACT</span>
          </h1>
          <form ref={form}  className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism shadow-xl" onSubmit={handleSubmit} style={{fontFamily: "Roboto"}}>
            <Input placeholder="What's your name?" name="name" type="text" onChange={handleNameChange} required/>
            {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            <Input placeholder="What's your email?" name="email" type="email" onChange={handleEmailChange} required/>
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            <Input placeholder="Your Business?" name="business" type="text"/>
            <Input placeholder="Your message" name="message" type="text" onChange={handleMessageChange} required/>
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}

            <div className="h-[1px] w-full bg-[#6761A8] my-2" />
            <button 
                type="button"
                onClick={handleSubmit}
                className="w-full mt-2 text-[#3A86FF]"
                >
                  Send Now
            </button>
          </form>

          <div style={{fontFamily: "Roboto"}}>
          {/* <p  className="text-left mt-20 text-[#0d0630] font-light text-base">
            <GoLocation className="w-8 h-8 text-[#44BBA4]"/>
            Los Angeles, California
          </p> */}
          <p  className="text-left mt-5 text-[#0d0630] font-light text-base">
            <AiOutlineMail className="w-8 h-8 text-[#ffc549]"/>
            BMCImprov@gmail.com
          </p>
          <p  className="text-left mt-5 text-[#0d0630] font-light text-base justify-end items-end relative">
            <AiFillInstagram className="w-8 h-8 text-[#FF006E]"/>
             <a href="https://www.instagram.com/bmcimprov/?hl=en">@BMCImprov</a>
          </p>
          <p  className="text-left mt-5 text-[#0d0630] font-light text-base">
            <AiFillYoutube className="w-8 h-8 text-[#ff0000]"/>
             <a href="https://www.youtube.com/channel/UCs7clFm1WxK5-FcfaHmtl9g">BMC TV</a>
          </p>
          <p  className="text-left mt-5 text-[#0d0630] font-light text-base justify-end items-end relative">
            <BsTwitter className="w-8 h-8 text-[#1da1fa]"/>
             <a href="https://twitter.com/BmcImprov">@BMCImprov</a>
          </p>
          <p  className="text-left mt-5 text-[#0d0630] font-light text-base justify-end items-end relative">
            <BsTiktok className="w-8 h-8 text-[#170e35]"/>
             <a href="https://www.tiktok.com/@bmcimprov">@BMCImprov</a>
          </p>
          </div>


         


        </div>



  
    </div>
  </div>
  );
};

export default Contact