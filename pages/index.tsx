import Link from "next/link"
import Head from "next/head"
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

const Home = ({ blog }: { blog: Blog[] }) => (
  <>
    <Head>
      <title>HOME | SamplePage</title>
    </Head>

    <Layout>
      <div className="w-full bg-bgGreen-900 py-8">
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
        gjapr
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

          <div className="flex flex-col md:flex-row justify-center mx-auto w-11/12 py-16">
            <AboutItem
              path="/images/about-1.png"
              title="こん棒粘土"
              text="嬉しいことに、人間工学に基づいた沖縄県はツインテールを搭載した麦わら帽子に発明されるらしい。消費税が螺旋にうねった羊羹に取りすがる。消費税が螺旋にうねった羊羹に取りすがる消費税が螺旋にうねった羊羹に取りすがった。"
              width={184}
              height={157}
            />
            <AboutItem
              path="/images/about-2.png"
              title="金ピカ増援"
              text="素晴らしい眼鏡は筋肉痛の独自規格である江戸川コナンと相性がよくないのであった。完璧な石灰は脳のようにも見えると推定されるし、更に悪いことに、黒鉛のごときお兄さんが黒船のような家庭の主婦などであった。"
              width={184}
              height={157}
            />
            <AboutItem
              path="/images/about-3.png"
              title="01"
              text="古来、100円ショップの一部である落語は赤毛の処女を構成することがある。肉汁がコンパスを殺すまで、羽ペンが開発されると言っていた。群れをなした筋肉痛は筆箱の親戚である恐山を見るのである。今の時代、シャーロック・ホームズは兵隊なのだ見込みである。"
              width={184}
              height={157}
            />
          </div>
        </div>
      </section>

      <section className="relative border -mt-16 pt-16">
        <Image
          src="/images/bg-skills.png"
          layout="fill"
          objectFit="cover"
          className="z-0"
          alt="背景画像"
        />

        <div className="relative wContainer z-10 ">
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

export default Home
