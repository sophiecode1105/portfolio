import { RefObject, useRef } from "react";
import styles from "./home.module.scss";

function Home({
  homeContainerRef,
  aboutContainerRef,
  careerContainerRef,
}: {
  homeContainerRef: RefObject<HTMLDivElement>;
  aboutContainerRef: RefObject<HTMLDivElement>;
  careerContainerRef: RefObject<HTMLDivElement>;
}) {
  const aboutRef = useRef<HTMLLIElement>(null);
  const careerRef = useRef<HTMLLIElement>(null);
  const skillsRef = useRef<HTMLLIElement>(null);
  const projectRef = useRef<HTMLLIElement>(null);

  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    const top = ref.current?.offsetTop;
    const nav = 5;

    if (!top) return;
    const height = top + nav;

    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };

  const addAndRemoveAnimation = (
    ref: RefObject<HTMLLIElement>,
    move: RefObject<HTMLDivElement>
  ) => {
    ref.current?.classList.add(styles.active);
    setTimeout(() => {
      scrollTo(move);
      ref.current?.classList.remove(styles.active);
    }, 1000);
  };

  return (
    <div ref={homeContainerRef} className={styles.home_container}>
      <div className={styles.project_wrapper}>
        <ul className={styles.project_list}>
          <li
            ref={aboutRef}
            className={styles.project}
            onClick={() => {
              addAndRemoveAnimation(aboutRef, aboutContainerRef);
            }}
          >
            <div>
              ABOUT
              <br />
              ME
            </div>
          </li>
          <li
            ref={careerRef}
            className={styles.project}
            onClick={() => {
              addAndRemoveAnimation(careerRef, careerContainerRef);
            }}
          >
            <div>
              WORK
              <br />
              EXPERIENCE
            </div>
          </li>
          <li className={styles.project}>
            <div>Project</div>
          </li>
          <li className={styles.project}>
            <div>Contact</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
