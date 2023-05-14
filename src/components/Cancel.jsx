import React from 'react'
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex mf:flex-row flex-col items-center justify-between ">
    <p className="sm:text-3xl text-[#0d0630] py-80 text-3xl text-center my-20 gothic break-words">

   <Link to="/registration" >Back to Carson Class...</Link>   
    </p>
  </div>
  )
}

export default Cancel