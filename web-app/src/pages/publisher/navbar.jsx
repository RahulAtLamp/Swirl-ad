import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Publisher.module.scss";
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <div className={styles.advNavMain}>
        <div className={styles.advNavHolder}>
          <div className={styles.advNavLeft}>
            <Image src={"/swirl-logo1.png"} width={100} height={100} />
          </div>
          <div className={styles.advNavRight}>
            <ul>
              <Link href="/publisher/">
                <li className={router.asPath === "/publisher" ? styles.Active : null}>
                  Dashboard
                </li>
              </Link>
              <Link href="/publisher/generate-token">
                <li className={router.asPath === "/publisher/generate-token" ? styles.Active : null}>
                  Generate Token
                </li>
              </Link>
              <Link href="/publisher/docs">
                <li className={router.asPath === "/publisher/docs" ? styles.Active : null}>
                  Docs
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar