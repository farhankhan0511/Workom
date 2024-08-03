import react from "react"
import logo from "../../public/logo.png"
import { Link } from "react-router-dom";

const Header=()=>{
return <div  className="w-full flex justify-between  ">

<div className="w-40  ">

<img src={logo}></img>
</div>
<div className="flex items-center">
<ul className="flex  gap-10">
    <Link><li>Home</li></Link>
    <Link to="/jobs"><li>Jobs</li></Link>
    <Link><li>Profile</li></Link>
</ul>
</div>
<div className="flex ">
    <ul  className="flex  gap-4">
    <li><button className="bg-white border border-solid border-gray-400 hover:bg-gray-100 rounded-md p-2">Login</button> </li>
    <li><button className="bg-blue-500 border border-solid  border-gray-400 hover:bg-blue-300 rounded-md p-2">Signup</button> </li>
    </ul>
   
</div>

</div>

}

export default Header;