import React, { RefObject } from "react";
import { useEffect, useRef } from "react";
import styles from "./main.module.scss";
import About from "./component/about/about";
import Home from "./component/home/home";
import Career from "./component/career/career";
import Project from "./component/project/project";
import Contact from "./component/contact/contact";

function Main() {
  const navRef = useRef<HTMLDivElement>(null);

  const homeContainerRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const careerContainerRef = useRef<HTMLDivElement>(null);
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const contactContainerRef = useRef<HTMLDivElement>(null);
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

  const scrollToTop = (ref: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
    <div className={styles.main} ref={homeContainerRef}>
      <Home
        homeContainerRef={homeContainerRef}
        aboutContainerRef={aboutContainerRef}
        careerContainerRef={careerContainerRef}
        projectContainerRef={projectContainerRef}
        contactContainerRef={contactContainerRef}
      />
      <nav className={styles.nav} ref={navRef}>
        <div>
          <div
            className={styles.nav_logo_wrapper}
            onClick={() => {
              scrollToTop(homeContainerRef);
            }}
          >
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
      <Project projectContainerRef={projectContainerRef} />
      <Contact contactContainerRef={contactContainerRef} />
    </div>
  );
}

export default Main;
