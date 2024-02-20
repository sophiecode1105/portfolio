import { useEffect } from "react";
import styles from "./project_detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/random_menu/1.png";
import img2 from "../../assets/random_menu/2.png";
import img3 from "../../assets/random_menu/3.png";

function RandomMenu() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.curtain}>
        <div data-aos="fade-up" data-aos-delay="1000">
          RANDOM MENU
        </div>
      </div>

      <div className={styles.desc_box}>
        <div className={styles.alignment}>
          <div className={styles.info_box}>
            <div>
              <div className={styles.label}>ABOUT</div>
              <div className={styles.contents}>
                <span>회사 근처의 음식집을 랜덤으로 고르는 서비스</span>
                <div className={styles.link_wrapper}>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="http://vrillar-lunch.s3-website.ap-northeast-2.amazonaws.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>서비스링크</div>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://github.com/sophiecode1105/vrillar-lunchr"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>GITHUB</div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.label}>ROLE</div>
              <div className={styles.contents}>
                <span>[Frontend] 난이도 下</span>
              </div>
            </div>
            <div>
              <div className={styles.label}>STACK</div>
              <div className={styles.contents}>react, styled-components</div>
            </div>
          </div>

          <div className={styles.img_box}>
            <img src={img1} alt="img1" />
          </div>

          <div className={styles.contents_2}>
            <div>많은 기능없이 아주 간단한 로직으로 구현한 프로젝트입니다.</div>
            <div>
              전 직장에서 앵귤러를 사용하기 때문에 리액트 사용감을 잃지
              않기위해서 진행해봤습니다.
            </div>
          </div>

          <div className={styles.img_box4}>
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomMenu;
