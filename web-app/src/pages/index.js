import styles from "@/styles/Home.module.css";
import Image from "next/image";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
// import {sample} from "swirl-sdk-sample";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import ConnectButtonCustom from "../Components/ConnectButtonCustom";
import { polygonMumbai, goerli, optimismGoerli } from "wagmi/chains";

// import { useAccount } from "wagmi";

const chains = [polygonMumbai, goerli, optimismGoerli];

export default function Home() {
  const { isConnected } = useAccount();
  const { address } = useAccount();

  return (
    <div className={styles.landing}>
      <div className={styles.bgContent}></div>
      <div className={styles.gradient2}></div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            className={styles.main}
            width={130}
            height={90}
            alt={"icon"}
            src="/swirl-logo1.png"
            priority
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.cntBtn}><a href="https://swirl.gitbook.io/product-docs/" target={"__blank"}>Docs</a></button>
          <ConnectButtonCustom />
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.tagline}>
          Experience privacy-first advertising, where relevance meets respect
        </div>
      </section>
      <section className={styles.advSection}>
        <div className={styles.advMain}>
          <div className={styles.advLeft}>
            <div className={styles.illustrator}>
              <Image
                width={400}
                height={500}
                className={styles.img}
                alt={"Illustration"}
                src="/static/illustration.png"
              />
              <Image
                width={800}
                height={700}
                className={styles.bg}
                alt={"Illustration-bg"}
                src="/static/illustration-bg.png"
              />
            </div>
          </div>
          <div className={styles.advRight}>
            <div className={styles.title}>
              How SWIRL is going to benefit Advertisers?
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              ipsa eligendi aut architecto, quos quidem reiciendis perspiciatis
              nisi optio possimus excepturi, itaque obcaecati voluptatem nihil
              assumenda quam doloremque ratione praesentium.
            </div>
            <div className={styles.kBtn}>
              <button className={styles.knowMore}>KNOW MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.pubSection}>
        <div className={styles.pubMain}>
          <div className={styles.pubRight}>
            <div className={styles.title}>
              How SWIRL is going to benefit Publishers?
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              ipsa eligendi aut architecto, quos quidem reiciendis perspiciatis
              nisi optio possimus excepturi, itaque obcaecati voluptatem nihil
              assumenda quam doloremque ratione praesentium.
            </div>
            <div className={styles.kBtn}>
              <button className={styles.knowMore}>KNOW MORE</button>
            </div>
          </div>
          <div className={styles.pubLeft}>
            <div className={styles.illustrator}>
              <Image
                width={400}
                height={500}
                className={styles.img}
                alt={"Illustration"}
                src="/static/illustration.png"
              />
              <Image
                width={800}
                height={700}
                className={styles.bg}
                alt={"Illustration-bg"}
                src="/static/illustration-bg.png"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.copyRight}>
          &#169; 2023 swirl.com All Rights Reserved.
        </div>
        <div className={styles.handles}>
          <Image
            width={30}
            height={30}
            className={styles.icon}
            alt={"facebook"}
            src="/static/facebook.png"
          />
          <Image
            width={30}
            height={30}
            className={styles.icon}
            alt={"linkedIn"}
            src="/static/linkedin.png"
          />
          <Image
            width={30}
            height={30}
            className={styles.icon}
            alt={"instagram"}
            src="/static/instagram.png"
          />
        </div>
      </footer>
    </div>
  );
}
