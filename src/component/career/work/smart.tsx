import { useState } from "react";
import styles from "./common.module.scss";
import Carousel from "../../common/carousel";

function Smart() {
  const [projectList, setProjectList] = useState([
    {
      project: "smart_things",
      currentIdx: 1,
      maxNum: 4,
    },
  ]);

  const handleChangeIdx = (pridx: number, newCurrentIdx: number) => {
    setProjectList((prevProjectList) =>
      prevProjectList.map((projectItem, index) =>
        index === pridx
          ? { ...projectItem, currentIdx: newCurrentIdx }
          : projectItem
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.left_box}>
          <div className={styles.title_wrap}>
            <div className={styles.project_title}>Smart things</div>
            <div>2023.12</div>
          </div>

          <div className={styles.desc_box}>
            <div className={styles.desc_1}>
              <span>
                유저의 스마트 기기를 연결하고 집을 관리하는 서비스입니다.
              </span>
              <span>
                삼성 디자인 센터의 외주 작업으로 기존의 있던 앱을 웹으로 만들어
                언리얼엔진을 연동 실험을 하기위하여 의뢰한 작업입니다.
              </span>
              <span>
                브릴라 퇴사 이후 브릴라의 외주 작업으로 참여하였습니다.
              </span>
              <span>
                서버와의 연동이 필요하지않은 간단한 기능의 작업으로 1주일 소요
                되었습니다.
              </span>
              <span>사용스택: React</span>
              <div className={styles.link_wrapper}>
                <ul className={styles.desc_detail}>
                  <div
                    onClick={() => {
                      handleChangeIdx(0, 1);
                    }}
                    className={
                      projectList[0].currentIdx === 1
                        ? styles.emphasis
                        : styles.normal
                    }
                  >
                    앱과 동일하게 페이지 구현
                  </div>
                  <div>
                    <div
                      onClick={() => {
                        handleChangeIdx(0, 2);
                      }}
                      className={
                        projectList[0].currentIdx === 2
                          ? styles.emphasis
                          : styles.normal
                      }
                    >
                      지도 기능
                    </div>
                    <li>순수 자바스크립트로 구현</li>
                    <li>터치, 드래그로 지도 이동 기능 개발</li>
                    <li>터치, 스크롤로 확대 기능 개발</li>
                  </div>
                  <div
                    onClick={() => {
                      handleChangeIdx(0, 3);
                    }}
                    className={
                      projectList[0].currentIdx === 3
                        ? styles.emphasis
                        : styles.normal
                    }
                  >
                    <div>미니맵 개발</div>
                    <li>지도가 화면에서 보여지는 부분을 미니맵으로 구현</li>
                    <li>지도 이동시 미니맵 연동 이동 기능 개발</li>
                  </div>
                  <div
                    onClick={() => {
                      handleChangeIdx(0, 4);
                    }}
                    className={
                      projectList[0].currentIdx === 4
                        ? styles.emphasis
                        : styles.normal
                    }
                  >
                    기존 앱과 동일한 애니메이션 구현
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_box}>
          <div className={styles.carousel_wrap}>
            <Carousel
              project={projectList[0].project}
              maxNum={projectList[0].maxNum}
              listNum={0}
              currentIdx={projectList[0].currentIdx}
              handleChangeIdx={handleChangeIdx}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smart;
