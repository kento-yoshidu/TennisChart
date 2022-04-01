import type { NextPage } from "next"
import Header from "./components/Header"

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-textGreen text-red-900">Hello World!</h1>
    </>
  )
}

export default Home
