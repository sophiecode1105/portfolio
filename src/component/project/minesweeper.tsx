import styles from "./project_detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../assets/minesweeper/1.png";
import img2 from "../../assets/minesweeper/2.png";
import img3 from "../../assets/minesweeper/3.png";

function Minesweeper() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.curtain}>
        <div data-aos="fade-up" data-aos-delay="1000">
          MINESWEEPER
        </div>
      </div>

      <div className={styles.desc_box}>
        <div className={styles.alignment}>
          <div className={styles.info_box}>
            <div>
              <div className={styles.label}>ABOUT</div>
              <div className={styles.contents}>
                <span>지뢰찾기 게임을 구현해본 프로젝트</span>
                <div className={styles.link_wrapper}>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="http://sophie-minesweeper.s3-website-us-east-1.amazonaws.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>서비스링크</div>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://github.com/sophiecode1105/minesweeper"
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
                <span>[Frontend] 1인 프로젝트 </span>
              </div>
            </div>
            <div>
              <div className={styles.label}>STACK</div>
              <div className={styles.contents}>
                react, redux-toolkit, typescript
                <span>styled-components</span>
              </div>
            </div>
          </div>

          <div className={styles.img_box}>
            <img src={img1} alt="img1" />
          </div>

          <div className={styles.contents_2}>
            <div>지뢰찾기 게임을 구현한 프로젝트입니다.</div>
            <div>서버없이 프론트엔드로만 구현한 프로젝트입니다.</div>
            <div>
              구글폼과 마찬가지로, 이 프로젝트에서는 redux-toolkit을 사용하여
              상태관리를 하였고, redux-toolkit을 사용하는 방법을 많이
              익혔습니다.
            </div>
            <ul className={styles.scope_wrap} style={{ marginTop: "20px" }}>
              <div className={styles.feature_scope}>구현 Scope</div>
              <li>첫번째 빈칸을 열었을 경우에는 지뢰가 터지지않기</li>
              <li>타이머</li>
              <li>난이도 변경</li>
              <li>오른쪽 클릭 깃발 기능</li>
            </ul>
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
export default Minesweeper;
