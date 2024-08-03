import React from 'react'
import image from "../../public/Jobsearchlandimage.jpg"
import fi_search from "../../public/fi_search.jpg"
import locationlogo from "../../public/locationlogo.jpg"


export const Jobsearchland = () => {
  return (
    <div className="flex border border-solid border-black justify-between bg-compback my-5">

    <div className="flex-col w-5/12 m-4 p-3">
        <h1 className="text-3xl font-semiboldbold m-2">Find a job that suits<br></br>your interests & skills.</h1>
       <div>
       <p className="m-2">Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
       </div>
       <div>
        <span ><input className="border border-black p-2" type="text"></input></span><span><input className="border border-black p-2 "type="text"></input></span><span><button className="bg-blue-800 text-white p-2">Find Job</button></span>
       </div>
    </div>

        <div className="w-[492px] h-[382px]">
        <img src={image}/>
    </div>

    </div>
  )
}
