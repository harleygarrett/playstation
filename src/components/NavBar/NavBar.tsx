import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav aria-label="Main menu">
        <ul role="list">
          <li>
            <Link href="/games">Games</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/apps">Apps</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
