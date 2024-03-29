import styles from "./project.module.scss";
import arrow_img from "../../assets/down_arrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { RefObject, useEffect } from "react";

function Project({
  projectContainerRef,
}: {
  projectContainerRef: RefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container} ref={projectContainerRef}>
      <div className={styles.container_name}>PROJECT</div>
      <div
        className={styles.project_alignment}
        style={{ backgroundImage: `url(${arrow_img})` }}
      >
        <div className={styles.project_card} data-aos="fade-up">
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/ssokbeer"
          >
            <div className={styles.project_name}>
              <div>SSOKBEER</div>
            </div>
          </a>

          <div className={styles.project_period}>
            2022.02
            <br />
            (코드스테이츠 2주 프로젝트)
          </div>
        </div>
        <div
          className={styles.project_card}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/dongnebook"
          >
            <div className={styles.project_name}>
              <div>DONGEBOOK</div>
            </div>
          </a>
          <div className={styles.project_period}>
            2022.02-2022.03
            <br />
            (코드스테이츠 한달 프로젝트)
          </div>
        </div>
        <div
          className={styles.project_card}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/googleform"
          >
            <div className={styles.project_name}>
              <div>GOOGLE FORM</div>
            </div>
          </a>
          <div className={styles.project_period}>2022.05</div>
        </div>
        <div
          className={styles.project_card}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/minesweeper"
          >
            <div className={styles.project_name}>
              <div>MINESWEEPER</div>
            </div>
          </a>
          <div className={styles.project_period}>2022.05</div>
        </div>
        <div
          className={styles.project_card}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/random_menu"
          >
            <div className={styles.project_name}>
              <div>RANDOM MENU</div>
            </div>
          </a>
          <div className={styles.project_period}>2022.09</div>
        </div>
        <div
          className={styles.project_card}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* <div className={styles.project_name}>
            <div>FORUM</div>
          </div>
          <div className={styles.project_period}>2024.05</div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
