import Header from "./components/Header"
import Link from "next/link"
import Image from "next/image"
import { client } from "../lib/client"

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })

  return {
    props: {
      blog: data.contents
    }
  }
}

const Home = ({ blog }: { blog: Blog[]}) => {
  return (
    <>
      <Header />

      <div className="w-full bg-bgGreen py-8">
        <div className="wContainer flex flex-col md:flex-row md:justify-between md:items-center">
          <hgroup className="md:ml-32 text-center md:text-left mb-6">
            <h1 className="mb-2 md:mb-6 text-white text-3xl md:text-5xl">メインタイトル</h1>
            <h2 className="md:text-3xl text-gray-100 font-medium">サブタイトル</h2>
          </hgroup>

          <div className="mx-auto md:mr-16 w-2/3 md:w-auto">
            <Image
              src="/images/hero.png"
              width={585}
              height={498}
              alt="ヒーロー画像"
            />
          </div>
        </div>
      </div>

      <div className="wContainer">
        <ul className="">
          {blog.map((blog) => (
            <li
              className="flex flex-col mb-8"
              key={`key${blog.id}`}
            >
              <Link href={`/blog/${blog.id}`}>
                <a className="text-2xl duration-200 hover:text-textGreen">
                  {blog.title}
                </a>
              </Link>

              <time>{blog.update}</time>
              <time>{blog.createdAt}</time>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
