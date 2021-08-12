import React from "react"
import { useRouter } from "next/router"
import Transition from "../Transition"

/** https://ellismin.com/2020/05/next-page-transition/ */
const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <div className='layout'>
      {/* Header component that doesn't animate */}
      <header>
        <h1>Header</h1>
      </header>
      <Transition location={router.pathname}>
        <main className='main'>{children}</main>
      </Transition>
    </div>
  )
}

export default Layout
