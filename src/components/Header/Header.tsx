import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css"

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <a href="#main" className="sr-only" >
        Skip to content
      </a>
      
      <header className={styles.header}>

        <Link href="/">
          <Image src="/icons/logo-playstation.svg" alt="Home" width={48} height={48} />
        </Link>

        <nav aria-label="Account menu" className={styles.nav}>
          <ul role="list" className={styles.navList}>
            <li>
              <Link href="/messages">
                <Image src="/icons/message.svg" alt="Messages" width={32} height={32} />
              </Link>
            </li>
            <li>
              <Link href="/notifications">
                <Image src="/icons/bell.svg" alt="Notifications" width={32} height={32} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
