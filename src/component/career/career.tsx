import { RefObject, useEffect, useState } from "react";
import styles from "./career.module.scss";

import Carousel from "../common/carousel";

function Career({
  careerContainerRef,
}: {
  careerContainerRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={careerContainerRef} className={styles.container}>
      <div>
        <div className={styles.alignment}>
          <div className={styles.left_box}>
            <h1 className={styles.page_title}>WORK EXPERIENCE</h1>
            <p className={styles.page_desc}>
              <span>(주) 브릴라</span>
              <span className={styles.margin_top}>
                2년차 개발자, 프론트엔드
              </span>
              <span className={styles.margin_top}>Angular, React</span>
              <span className={styles.margin_top}>
                웹 서비스 프론트엔드 설계, 개발, 운영 경험
              </span>
              <span>다양한 직군과의 협업 경험</span>
            </p>
          </div>
          <div className={styles.right_box}>
            <div className={styles.project_list}>
              <div className={styles.history}>
                <div>2022.06-2023.12</div>
              </div>
              <a className={styles.link_tag} href="/merror">
                <li className={styles.strong_font}>
                  <div> ME.RROR</div>

                  <span className={styles.sub_desc}>
                    /In-house Key Development Projects
                  </span>
                </li>
              </a>
              <a className={styles.link_tag} href="/samsung_anthropometric">
                <li>
                  <div>
                    SAMSUNG <br />
                    ANTHROPOMETRIC
                  </div>

                  <span className={styles.sub_desc}>/Outsourcing Projects</span>
                </li>
              </a>
              <a className={styles.link_tag} href="/smart_things">
                <li>
                  <div>SMART THINGS</div>
                  <span className={styles.sub_desc}>/Outsourcing Projects</span>
                </li>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
