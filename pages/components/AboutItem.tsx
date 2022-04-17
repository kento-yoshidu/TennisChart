import React from "react"

import Image from "next/image"

const AboutItem = (
  { path, title, text, width, height }:
  { path: string, title: string, text: string, width: number, height: number }
) => (
  <div className="h-96 text-center w-1/3">
    <div className="relative mb-4">
      <Image
        src={path}
        width={width}
        height={height}
        alt="test"
      />
    </div>

    <h3 className="mb-4 text-textGreen text-2xl font-bold">
      {title}
    </h3>
    <p className="w-9/12 mx-auto tracking-widest">
      {text}
    </p>
  </div>
)

export default AboutItem
