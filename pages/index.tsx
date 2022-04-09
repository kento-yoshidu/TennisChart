import Link from "next/link"
import Image from "next/image"
import { client } from "../lib/client"

import Layout from "./components/Layout"
import Title from "./components/Title"
import AboutItem from "./components/AboutItem"

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
      <Layout>
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

        <section className="relative">
          <Image
            src="/images/bg-about.png"
            layout="fill"
            objectFit="cover"
            className="z-0"
            alt="背景画像"
          />

          <div className="relative wContainer py-16 z-10">
            <Title
              title="私について"
              subTitle="ABOUT"
            />

            <div className="flex flex-col md:flex-row justify-center py-16">
              <AboutItem
                path="/images/about-1.png"
                title="01"
                text="10"
                width={184}
                height={157}
              />
              <AboutItem
                path="/images/about-1.png"
                title="01"
                text="10"
                width={184}
                height={157}
              />
              <AboutItem
                path="/images/about-1.png"
                title="01"
                text="10"
                width={184}
                height={157}
              />
            </div>

          </div>
        </section>

        <section className="relative">
          <Image
            src="/images/bg-skills.png"
            layout="fill"
            objectFit="cover"
            className="z-0"
            alt="背景画像"
          />

          <div className="relative wContainer z-10">
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
            <Title
              title="私について"
              subTitle="ABOUT"
            />
          </div>
        </section>

        <section className="wContainer">
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
        </section>
      </Layout>
    </>
  )
}

export default Home
