import Link from "next/link";
import Image from "next/image";

import styles from "./NavBar.module.css"

export default function Header() {
  return (
    <>
      <nav aria-label="Main menu" className={styles.nav}>
        <ul role="list" className={styles.navList}>
          <li>
            <Link href="/games">
              <Image src="/icons/controller.svg" alt="Games" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/store">
              <Image src="/icons/shop.svg" alt="Store" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/apps">
              <Image src="/icons/apps.svg" alt="Apps" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/search">
              <Image src="/icons/search.svg" alt="Search" width={32} height={32} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
