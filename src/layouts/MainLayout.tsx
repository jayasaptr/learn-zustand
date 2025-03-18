import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <main className="">{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout