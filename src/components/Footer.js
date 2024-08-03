import React from 'react'
import { Link } from 'react-router-dom'
import facebook from "./../../public/Facebook.jpg"
import Instagram from "./../../public/Instagram.png"
import Linkedin from "./../../public/Linkedin.png"
import Twitter from "./../../public/Twitter.png"




export const Footer = () => {
  return (
    <div className="bottom-0 w-full my-5">
        <div className=" grid grid-cols-3 gap-4  justify-center bg-compback w-full ">
            <div className="flex flex-col m-3">
                <p>Find the perfect job for yourself</p>
                <div className="flex gap-2">
                <span><a className="w-3" href=""><img src={facebook}/></a></span>
                <span><a className="w-3" href=""><img src={Twitter}/></a></span>
                <span><a className="w-3" href=""><img src={Linkedin}/></a></span>
                <span><a className="w-3" href=""><img src={Instagram}/></a></span>

                </div>
            </div>
            <div className="felx flex-col ">
                <div className="flex flex-col m-3">
                    <Link className="font-semibold">Company</Link>
                    <Link>About us</Link>
                    <Link>FAQ</Link>
                    <Link>Support</Link>
                </div>
                <div className="flex flex-col m-3">
                    <Link className="font-semibold">Legal</Link>
                    <Link>Terms and Condition</Link>
                    <Link>Copyright information</Link>
                    <Link>Cookies policy</Link>
                </div>
            </div>
            <div className="flex flex-col m-3">
            <Link className="font-semibold">Information</Link>
                    <Link>Pricing</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
            </div>
          
        </div>
        <hr className="border border-b-2 border-black"/>
        <div ><p>2024.WORKOM All rights reserverd</p></div>
    </div>
  )
}
