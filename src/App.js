import react from "react"
import Reactdom from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Landpage from "./components/Landpage"
import  Footer  from "./components/Footer"
import  Jobs from "./components/Jobs"

const App=()=>{
    return(
        <div className="w-full ">
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    )
}

const appbrowser=createBrowserRouter([
    {path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Landpage/>

            },
            {
                path:"/jobs",
                element:<Jobs/>
            }
        ]
    }
])

const root=Reactdom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appbrowser}></RouterProvider>)
