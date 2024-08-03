import react from "react"
import Reactdom from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App=()=>{
    return(
        <div>
            <h1>Rendered</h1>
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
