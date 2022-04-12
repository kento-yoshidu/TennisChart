import Link from "next/link"

const Button = ({ path }: { path: string }) => (
  <button className="block mx-auto py-2 px-8 text-textGreen border-2 border-bgGreen-900 font-semibold rounded hover:bg-bgGreen-800">
    <Link href={path}>
      HOME
    </Link>
  </button>
)

export default Button
