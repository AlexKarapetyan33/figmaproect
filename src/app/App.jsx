import { Routes, Route } from "react-router-dom"
import { Layout } from "../components/templates/Layout/Layout"
import { Posts } from "../components/pages/Posts/Posts"



export const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />}/>
          <Route path="/posts" element={<Posts />}/>
        </Route>
      </Routes>
    </>
  )
}
