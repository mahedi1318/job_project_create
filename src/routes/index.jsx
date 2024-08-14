import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import About from "../pages/About"
import Root from "../layout/root/Root"
import Employers from "../pages/Employers"
import FindWorker from "../pages/FindWorker"
import Industry from "../pages/Industry"
import Resources from "../pages/Resources"
import Contact from "../components/Industry_page/Contact_Part/Contact"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/employers" element={<Employers/>}></Route>
        <Route path="/findWorker" element={<FindWorker/>}></Route>
        <Route path="/industry" element={<Industry/>}></Route>
        <Route path="/resources" element={<Resources/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Route>
))

const Routess = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Routess
