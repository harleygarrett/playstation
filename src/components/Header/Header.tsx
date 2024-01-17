import Link from "next/link";

export default function Header() {
  return (
    <>
      <a href="#main" className="sr-only" >
        Skip to content
      </a>
      
      <header>

        <Link href="/">
          Home
        </Link>

        <nav aria-label="Account menu">
          <ul role="list">
            <li>
              <Link href="/messages">Messages</Link>
            </li>
            <li>
              <Link href="/notifications">Notifications</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
