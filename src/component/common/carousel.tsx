import { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import left_button_icon from "../../assets/left_button.svg";
import right_button_icon from "../../assets/right_button.svg";

function Carousel({
  project,
  maxNum,
  listNum,
  handleChangeIdx,
  currentIdx,
}: {
  project: string;
  maxNum: number;
  listNum: number;
  handleChangeIdx: any;
  currentIdx: number;
}) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(`/${project}/desc${currentIdx}.png`);
  }, [project, currentIdx]);

  const moveCarousel = (direction: number) => {
    let newDirection = currentIdx + direction;
    let setCurrentidx;
    if (newDirection > maxNum) setCurrentidx = 1;
    else if (newDirection < 1) setCurrentidx = maxNum;
    else setCurrentidx = newDirection;
    handleChangeIdx(listNum, setCurrentidx);
  };

  return (
    <div className={styles.carousel_container}>
      <div
        className={styles.carousel_image}
        style={{ backgroundImage: `url(${currentUrl})` }}
      ></div>
      <div className={styles.carousel_controller}>
        <img
          onClick={() => {
            moveCarousel(-1);
          }}
          className={styles.arrow_button}
          src={left_button_icon}
          alt="left_button"
        />
        <span>
          {currentIdx} / {maxNum}
        </span>
        <img
          onClick={() => {
            moveCarousel(1);
          }}
          className={styles.arrow_button}
          src={right_button_icon}
          alt="right_button"
        />
      </div>
    </div>
  );
}

export default Carousel;
