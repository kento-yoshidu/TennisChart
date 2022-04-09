import React from "react"

import Image from "next/image"

const AboutItem = (
  { path, title, text, width, height }:
  { path: string, title: string, text: string, width: number, height: number }
) => (
  <div className="h-56 border text-center">
    <div className="relative border">
      <Image
        src={path}
        width={width}
        height={height}
        alt="test"
      />
    </div>

    <h3 className="text-textGreen">
      {title}
    </h3>
    <p>
      {text}
    </p>
  </div>
)

export default AboutItem
