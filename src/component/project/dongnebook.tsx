import { useEffect } from "react";
import styles from "./project_detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/dongnebook/1.png";
import img2 from "../../assets/dongnebook/2.png";
import img3 from "../../assets/dongnebook/3.png";
import img4 from "../../assets/dongnebook/4.png";
import img5 from "../../assets/dongnebook/5.png";
import img6 from "../../assets/dongnebook/6.png";
import img7 from "../../assets/dongnebook/7.png";
import img8 from "../../assets/dongnebook/8.png";
import img9 from "../../assets/dongnebook/9.png";
import img10 from "../../assets/dongnebook/10.png";
import img11 from "../../assets/dongnebook/11.png";

function Dongnebook() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.curtain}>
        <div data-aos="fade-up" data-aos-delay="1000">
          DONGNEBOOK
        </div>
      </div>

      <div className={styles.desc_box}>
        <div className={styles.alignment}>
          <div className={styles.info_box}>
            <div>
              <div className={styles.label}>ABOUT</div>
              <div className={styles.contents}>
                <span>위치 기반 도서 교환 플랫폼</span>
                <div className={styles.link_wrapper}>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://dongnebook.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>서비스링크</div>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://github.com/sophiecode1105/dongnebook-1"
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
                  아이디어 제시, 로고제작, UI/UX 담당 , 채팅페이지를 제외 하고
                  모든 페이지를 담당
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
                react, recoil, styled-components
              </div>
            </div>
          </div>

          <div className={styles.img_box}>
            <img src={img1} alt="img1" />
          </div>

          <div className={styles.contents_2}>
            <div>'코드스테이츠' 부트캠프에서 작업했던 4주 프로젝트입니다.</div>
            <div>
              프론트엔드 1명, 풀스택 1명, 백엔드 2명으로 구성된 팀입니다.
            </div>
            <div>
              이전에 쏙비어 프로젝트에서 사용했던 기술스택을 유지하고, recoil을
              추가로 사용했습니다.
            </div>
            <div style={{ marginTop: "20px" }}>
              이 프로젝트를 통해서 html, css 등이 손에 익숙해졌고, 이전에는
              간단한 상태관리를 경험해봤다면, 좀 더 복잡한 상태관리를
              경험해보았습니다.
            </div>
            <div>
              이를 통해 recoil, redux등의 상태관리 라이브러리를 사용하는 이유 등
              상태 관리에 대한 이해도를 높일 수 있었습니다.
            </div>

            <div className={styles.img_box3} style={{ margin: "20px 0" }}>
              <img src={img2} alt="img2" />
              <img src={img3} alt="img3" />
            </div>

            <div className={styles.contents_2}>
              <div>
                카카오맵을 사용하여 현재 위치를 보여주며, 유저들이 업로드한
                도서목록을 지도상에서 보 여줄 수 있는 기능을 만들었습니다.
              </div>
              <div>
                Third-party API를 경험해봤으며, 에러에 직면했을때 팀원들과 함께
                구글링하여 해결하는 경험을 배웠습니다.
              </div>
            </div>

            <div className={styles.img_box3} style={{ margin: "20px 0" }}>
              <img src={img4} alt="img4" />
              <img src={img5} alt="img5" />
            </div>

            <div>
              도서페이지 검색, 등록 상세보기, 수정 (CRUD)를 구현했습니다.
            </div>

            <div className={styles.img_box3} style={{ margin: "20px 0" }}>
              <img src={img6} alt="img6" />
              <img src={img7} alt="img7" />
              <img src={img8} alt="img8" />
            </div>

            <div className={styles.contents_2}>
              <div>
                useForm을 사용하여 로그인, 회원가입시 실시간 유효성검사 기능을
                적용했습니다.
              </div>

              <div>SVG 조작 하는 법을 배워 메인페이지에 적용했습니다.</div>
            </div>

            <div className={styles.feedback_img}>
              <img src={img9} alt="img9" />
              <img src={img10} alt="img10" />
              <img src={img11} alt="img11" />
            </div>

            <div className={styles.contents_2}>
              쏙비어, 동네북 프로젝트를 함께 진행 했던 팀원들의 피드백을
              첨부합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dongnebook;
