import Footer from "@/components/Layout/Footer";
import NavBar from "@/components/Layout/NavBar";
import { ReactNode } from "react";

interface ILayout {
    children: ReactNode
}

const Layout = ({children}: ILayout) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;
