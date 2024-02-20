import { RefObject } from "react";
import styles from "./about.module.scss";
import avartar from "../../assets/avartar.png";
import avartar2 from "../../assets/avartar2.png";
import user_icon from "../../assets/user.png";
import phone_icon from "../../assets/phone.png";
import email_icon from "../../assets/email.png";
import pen_icon from "../../assets/pen.png";
import github_icon from "../../assets/github.png";
import blog_icon from "../../assets/blog.png";
import macbook_img from "../../assets/macbook.png";

function About({
  aboutContainerRef,
}: {
  aboutContainerRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={aboutContainerRef} className={styles.container}>
      <div className={styles.type_wrapper}>
        <div id="typing_target" className={styles.typing_container}>
          <h1 className={styles.page_title}>ABOUT ME</h1>
        </div>
      </div>
      <div className={styles.about_contents}>
        <div className={styles.contents2}>
          <div className={styles.contents2_detail1}>
            <div className={styles.job}>
              <div>
                FRONTEND
                <br />
                DEVELOPER
              </div>
              <div className={styles.contents1}>
                <div style={{ backgroundImage: `url(${avartar2})` }}></div>
              </div>
            </div>
            <div className={styles.short_info}>
              <span>안녕하세요.</span>
              <span>프론트엔드 웹 개발자 이채영의 포트폴리오입니다.</span>
              <span>
                <span className={styles.bluecolor}>React</span>와{" "}
                <span className={styles.redcolor}>Angular</span>를 활용하여
                다양한 웹사이트를 개발한 경험이 있습니다.
              </span>
              <span>
                UI / UX에도 흥미를 느끼며 사용자의 입장에서 좀 더 편리한
                디자인을 생각합니다.
              </span>
              <span>
                최신 기술과 트렌드를 주시하며 지속적인 발전에 노력하고 있습니다.
              </span>
              <span>최근에는 새롭게 출시한 Next.js 13을 학습하여,</span>
              <span>
                Next.js의 강점인 SEO 최적화, 간편한 라우팅등을 활용하여
                프로젝트를 진행하고 있습니다.
              </span>
            </div>
            <div className={styles.skills}>
              <div>SKILLS</div>
              <ul className={styles.skills_list}>
                <li>
                  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white" />
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
                </li>
                <li>
                  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black" />
                  <img src="https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white" />
                  <img src="https://img.shields.io/badge/Redux Toolkit-593D88?style=flat-square&logo=redux&logoColor=white" />
                  <img src="https://img.shields.io/badge/Recoil-015cfe?style=flat-square&logo=Recoil&logoColor=white" />
                </li>
                <li>
                  <img src="https://img.shields.io/badge/Styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white" />
                  <img src="https://img.shields.io/badge/SASS-cc6699.svg?&style=flat-square&logo=Sass&logoColor=white" />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents2_detail2}>
            <div className={styles.details2_title}>{"SOPHIE <CODER>"}</div>
            <div className={styles.personal_info}>
              <div>
                <div className={styles.icon_box}>
                  <img src={user_icon} alt="user_icon" />
                </div>
                <div className={styles.personal_details}>
                  <span className={styles.personal_label}>Name</span>
                  <span>이채영</span>
                </div>
              </div>
              <div>
                <div className={styles.icon_box}>
                  <img src={phone_icon} alt="phone_icon" />
                </div>
                <div className={styles.personal_details}>
                  <span className={styles.personal_label}>Phone</span>
                  <span>010-4780-2873</span>
                </div>
              </div>
              <div>
                <div className={styles.icon_box}>
                  <img src={email_icon} alt="email_icon" />
                </div>
                <div className={styles.personal_details}>
                  <span className={styles.personal_label}>Email</span>
                  <span>sophiecode1105@gmail.com</span>
                </div>
              </div>
              <div>
                <div className={styles.icon_box}>
                  <img src={pen_icon} alt="pen_icon" />
                </div>
                <div className={styles.personal_details}>
                  <span className={styles.personal_label}>Education</span>
                  <span>
                    University of Manchester (Fashion textiles), 코드스테이츠
                  </span>
                </div>
              </div>
              <div>
                <div className={styles.icon_box}>
                  <img src={github_icon} alt="github_icon" />
                </div>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="https://github.com/sophiecode1105"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className={styles.personal_details}>
                    <button>GITHUB</button>
                  </div>
                </a>
              </div>
              <div>
                <div className={styles.icon_box}>
                  <img src={blog_icon} alt="blog_icon" />
                </div>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="https://developeritchaeyachae.tistory.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className={styles.personal_details}>
                    <button>BLOG</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
