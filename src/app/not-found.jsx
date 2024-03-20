import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <p>Not found</p>
      <p>Sorry this page is not exits</p>
      <Link href="/">Go back to home</Link>
    </div>
  )
}

export default NotFound
