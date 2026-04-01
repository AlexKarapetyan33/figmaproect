import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <>
        <nav>
            <NavLink to={'/posts'}>Posts</NavLink>
        </nav>
    </>
  )
}
