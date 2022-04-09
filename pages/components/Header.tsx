import React from "react"
import Image from "next/image"
import Link from "next/link"

const Header: React.VFC = () => (
  <header className="wContainer pb-2 flex flex-col md:flex-row justify-between items-center">
    <Link href="/">
      <a className="cursor-pointer">
        <Image
          src="/images/logo.png"
          width={192}
          height={96}
          alt="会社ロゴ"
        />
      </a>
    </Link>

    <ul className="flex w-5/6 justify-between md:w-1/3 text-textGreen font-semibold md:text-2xl">
      <li>
        <Link href="/">
          <a>
            ABOUT
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          SKILLS
        </Link>
      </li>
      <li>
        <Link href="/">
          VALUES
        </Link>
      </li>
      <li>
        <Link href="/">
          FUTURE
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
