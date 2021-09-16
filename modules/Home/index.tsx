import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";
import Layout, { Header } from "@common/components/Layout";
import Banner from "@modules/Home/components/Banner";
import Partners from "@modules/Home/components/Partners";

const Home = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <div className={styles["background"]}>
        <Image
          src="/images/group-cheerful-friends.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <Banner />
      <Partners />

      <section className={styles["steps-section"]}>
        <div className={styles["step-container"]}>
          <div className={styles["logo"]}>
            <Image src="/images/flag.svg" width={33} height={35} />
          </div>
          <div className={styles["text-group"]}>
            <div className={styles["title"]}>Start unit</div>
            <div className={styles["description"]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>

        <div className={styles["step-container"]}>
          <div className={styles["logo"]}>
            <Image src="/images/open-book.svg" width={33} height={35} />
          </div>
          <div className={styles["text-group"]}>
            <div className={styles["title"]}>Learn and fill up assessments</div>
            <div className={styles["description"]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>

        <div className={styles["step-container"]}>
          <div className={styles["logo"]}>
            <Image src="/images/trophy.svg" width={33} height={35} />
          </div>
          <div className={styles["text-group"]}>
            <div className={styles["title"]}>Get certified!</div>
            <div className={styles["description"]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
