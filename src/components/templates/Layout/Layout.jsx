import { Header } from "../../pages"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
