import styles from "./project_detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../assets/googleform/1.png";
import img2 from "../../assets/googleform/2.png";
import img3 from "../../assets/googleform/3.png";
import img4 from "../../assets/googleform/4.png";
import img5 from "../../assets/googleform/5.png";
import img6 from "../../assets/googleform/6.png";

function Googleform() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.curtain}>
        <div data-aos="fade-up" data-aos-delay="1000">
          GOOGLE FORM
        </div>
      </div>

      <div className={styles.desc_box}>
        <div className={styles.alignment}>
          <div className={styles.info_box}>
            <div>
              <div className={styles.label}>ABOUT</div>
              <div className={styles.contents}>
                <span>구글폼의 다양한 기능을 똑같이 만들어보는 프로젝트</span>
                <div className={styles.link_wrapper}>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="http://sophie-googleform.s3-website-us-east-1.amazonaws.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>서비스링크</div>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://github.com/sophiecode1105/googleform"
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
                <span>[Frontend] 1인 프로젝트</span>
              </div>
            </div>
            <div>
              <div className={styles.label}>STACK</div>
              <div className={styles.contents}>
                react, redux-toolkit, styled-components
              </div>
            </div>
          </div>

          <div className={styles.img_box}>
            <img src={img1} alt="img1" />
          </div>

          <div className={styles.contents_2}>
            <div>
              흔히 사용하는 google form의 기능 및 디자인을 따라서 만들어본
              프로젝트입니다.
            </div>
            <div>서버없이 프론트엔드로만 구현한 프로젝트입니다.</div>
            <div>
              생각보다 많은 기능이 있어 중간중간 전체 구조를 수정하는 작업이
              있었기에, 많은 공부가 되었습니다.
            </div>
            <div>
              이 프로젝트에서는 redux-toolkit을 사용하여 상태관리를 하였고, 이
              프로젝트를 통해 redux-toolkit을 사용하는 방법을 많이 익혔습니다.
            </div>
            <ul className={styles.scope_wrap} style={{ marginTop: "20px" }}>
              <div className={styles.feature_scope}>구현 Scope</div>
              <li>설문지 제목 추가,편집 과 설문지 설명 추가, 편집</li>
              <li>
                질문을 추가하면 질문이 추가됩니다. (단답형,장문형,객관식
                질문,체크박스,드롭다운)
              </li>
              <div className={styles.scope_img}>
                <img src={img6} alt="img6" />
              </div>
              <li>질문 복사 및 삭제 기능</li>
              <li>필수 옵션 설정 기능 (필수 옵션 미기입시 제출 불가)</li>
              <li>미리보기 기능에서 설문지 미리보기</li>
              <li>
                <img
                  src={img2}
                  alt="img2"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                메뉴 상단에서 오른쪽과 같은 '눈모양' 버튼을 누르면 확인할 수
                있음
              </li>

              <li>
                [제출] 버튼 눌렀을 경우 사용자가 작성한 데이터를 보여 줍니다.
              </li>
              <li>양식 지우기</li>
            </ul>

            <div className={styles.img_box4}>
              <img src={img3} alt="img4" />
              <img src={img4} alt="img5" />
            </div>

            <div className={styles.img_box4}>
              <img src={img5} alt="img6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Googleform;
