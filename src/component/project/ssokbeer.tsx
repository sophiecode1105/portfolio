import styles from "./project_detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../assets/ssokbeer/1.png";
import img2 from "../../assets/ssokbeer/2.png";
import img3 from "../../assets/ssokbeer/3.png";
import img4 from "../../assets/ssokbeer/4.png";
import img5 from "../../assets/ssokbeer/5.png";
import img6 from "../../assets/ssokbeer/6.png";

function Ssokbeer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.curtain}>
        <div data-aos="fade-up" data-aos-delay="1000">
          SSOKBEER
        </div>
      </div>
      <div className={styles.desc_box}>
        <div className={styles.alignment}>
          <div className={styles.info_box}>
            <div>
              <div className={styles.label}>ABOUT</div>
              <div className={styles.contents}>
                <span>선택한 주류에 알맞는 안주를 추천해 주는 플랫폼</span>
                <div className={styles.link_wrapper}>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="http://ssokbeer-bucket-depoly.s3-website.ap-northeast-2.amazonaws.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>서비스링크</div>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://github.com/sophiecode1105/ssokbeer"
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
                <span>[Frontend] 기여도 上</span>
                <span style={{ marginTop: "10px" }}>
                  로고제작, UI/UX 담당, 마이페이지 회원가입 페이지를 제외한 모든
                  페이지 제작
                </span>
                <span>
                  공동작업 : DB 스키마 작성, Figma 목업 작성 , 서버 및
                  클라이언트 배포
                </span>
              </div>
            </div>
            <div>
              <div className={styles.label}>STACK</div>
              <div className={styles.contents}>
                react, redux, styled-components
              </div>
            </div>
          </div>

          <div className={styles.img_box}>
            <img src={img1} alt="img1" />
          </div>

          <div className={styles.contents_2}>
            <div>'코드스테이츠' 부트캠프에서 작업했던 12일 프로젝트입니다.</div>
            <div>
              프론트엔드 1명, 풀스택 1명, 백엔드 2명으로 구성된 팀입니다.
            </div>
            <div>
              부트캠프에서 배웠던 프로그래밍 언어와 라이브러리를 사용하여
              작업했습니다.
            </div>
            <div style={{ marginTop: "20px" }}>
              이론으로 배웠던 것들을 실제로 사용하고 만들어보며, 개발에 더 큰
              흥미를 느끼게 된 계기였습니다.
            </div>
            <div>
              개발자로서의 첫 프로젝트로, 협업하는법과 코드 리뷰를
              경험해봤습니다.
            </div>
            <div>
              또한, 시간내에 기능을 구현하고 배포하는 과정을 경험했습니다.
            </div>
          </div>

          <div className={styles.contents_2}>
            <div>
              아래와 같이 데스크탑, 모바일 반응형 웹으로 제작하였습니다.
            </div>
          </div>

          <div className={styles.img_box2}>
            <div className={styles.img_wrap}>
              <img src={img2} alt="img2" />
            </div>
            <div className={styles.img_wrap2}>
              <img src={img3} alt="img3" />
            </div>
          </div>

          <div className={styles.contents_2} style={{ margin: "100px 0" }}>
            <div>
              코드 리뷰로 Front, BackEnd 간 <span>통신 프로세스</span>를
              이해했습니다.
            </div>
            <div>
              프로그램이 데이터를 처리하기 위해 필요한 기능인
              CRUD(커뮤니티페이지 검색, 등록, 상세보기, 수정)를 구현해봤습니다.
            </div>
          </div>

          <div className={styles.img_box3}>
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ssokbeer;
