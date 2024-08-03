import react from "react"
import Reactdom from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Landpage from "./components/Landpage"
import { Footer } from "./components/Footer"

const App=()=>{
    return(
        <div className="w-full">
            <Header/>
            <Landpage/>
            <Footer/>

        </div>
    )
}

const appbrowser=createBrowserRouter([
    {path:"/",
        element:<App/>
    }
])

const root=Reactdom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appbrowser}></RouterProvider>)
