import React from "react"

const Title = ({ title, subTitle }: { title: string, subTitle: string }) => (
  <>
    <div className="flex justify-center items-center gap-4 font-bold">
      <h2 className="text-gray-600 text-3xl">{title}</h2>
      <p className="text-lg text-textGreen">{subTitle}</p>
    </div>
  </>
)

export default Title
