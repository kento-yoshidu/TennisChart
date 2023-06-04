import React from "react"

import Header from "./header"
import Footer from "./footer"
import Container from "./container"

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />

    <Container>
      {children}
    </Container>

    <Footer />
  </>
)

export default Layout
