import React from "react";
import { useEffect, useRef } from "react";
import styles from "./main.module.scss";
import About from "./component/about/about";
import Home from "./component/home/home";
import Career from "./component/career/career";
import Project from "./component/project/project";

function Main() {
  const navRef = useRef<HTMLDivElement>(null);

  const homeContainerRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const careerContainerRef = useRef<HTMLDivElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);
  const hideRef1 = useRef<HTMLSpanElement>(null);
  const hideRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    navRef.current?.classList.add(styles.opacityZero);
    setTimeout(() => {
      navRef.current?.classList.remove(styles.opacityZero);
    }, 2000);

    addIntersectionObserver();
    addIntersectionObserver2();
  }, []);

  const addIntersectionObserver = (): void => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = document.getElementById("typing_target");
          if (entry.isIntersecting) {
            const intersectionRatio = entry.intersectionRatio;
            if (intersectionRatio >= 0.5) {
              target?.classList.add(styles.animation_play);
            }
          } else {
            target?.classList.remove(styles.animation_play);
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    if (aboutContainerRef.current) observer.observe(aboutContainerRef.current);
  };

  const addIntersectionObserver2 = (): void => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navRef.current?.classList.remove(styles.color1);
            hideRef1.current?.classList.remove(styles.logo_hide);
            hideRef2.current?.classList.remove(styles.logo_hide);
          } else {
            navRef.current?.classList.add(styles.color1);
            hideRef1.current?.classList.add(styles.logo_hide);
            hideRef2.current?.classList.add(styles.logo_hide);
          }
        });
      },
      {
        threshold: [0],
      }
    );

    if (fakeRef.current) observer.observe(fakeRef.current);
  };

  return (
    <div className={styles.main}>
      <Home
        homeContainerRef={homeContainerRef}
        aboutContainerRef={aboutContainerRef}
        careerContainerRef={careerContainerRef}
      />
      <nav className={styles.nav} ref={navRef}>
        <div>
          <div className={styles.nav_logo_wrapper}>
            <span className={styles.ani1}>
              SO<span ref={hideRef1}>PHIE</span>
            </span>
            <span className={styles.ani2}>
              PO<span ref={hideRef2}>RTFOLIO</span>
            </span>
          </div>
        </div>
      </nav>
      <div
        ref={fakeRef}
        style={{ minHeight: "150px", backgroundColor: "#4831d4" }}
      ></div>
      <About aboutContainerRef={aboutContainerRef} />
      <Career careerContainerRef={careerContainerRef} />
      <Project />
    </div>
  );
}

export default Main;
