import { useState } from "react";
import styles from "./common.module.scss";
import Carousel from "../../common/carousel";

function Samsung() {
  const [projectList, setProjectList] = useState([
    {
      project: "samsung_anthropometric",
      currentIdx: 1,
      maxNum: 5,
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
            <div className={styles.project_title}>
              Samsung Anthropometric Database
            </div>
            <div>2023.07.28 ~ 2023.09.28</div>
          </div>

          <div className={styles.desc_box}>
            <div className={styles.desc_1}>
              <span>
                인체 데이터를 사용자가 선택한 조건에 따라 그림과 그래프 등의
                수치로 보여 주는 분석 프로그램입니다.
              </span>
              <span>
                삼성 디자인 센터의 외주 작업으로 타회사 비개발팀과의 협업 경험을
                쌓았습니다.
              </span>
              <span>일렉트론을 이용해 데스크톱용 앱 개발을 진행했습니다.</span>
              <span>사용스택: React, Redux Toolkit</span>
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
                    사용자가 원하는 조건에 따라 데이터를 필터링하여 보여주는
                    기능 개발
                  </div>
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
                    <div>필터링 후 나온 데이터를 시각화</div>
                    <li>
                      사용자의 percentile 추가시 데이터 가공으로 해당 조건에
                      맞는 수치 계산 기능 개발
                    </li>
                    <li>
                      클릭시 색상 변화, 드래그를 통하여 하위 데이터 스크롤 기능
                      등 다양한 인터랙션 구현
                    </li>
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
                    <div>
                      데이터 들어오는 수치에 따라 막대 그래프간의 구간 간격 조
                      정화 작업
                    </div>
                    <li>
                      그래프 개수가 8개 이상은 되지 않게 작업하며, 수치는
                      데이터에 따라 5 10 50 100 단위에 맞게 알맞게 5단위로
                      자르는 작업, 혹은 아주 작은 수치일때는 3단위로 끊는 작업
                    </li>
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
                    <div>
                      Static Analysis 와 Size Classification 사이의 모수 정보
                      동기화 개발
                    </div>
                    <li>
                      <span>Redux Toolkit을 이용한 상태관리 공유</span>를 통하여
                      정보 동기화
                    </li>
                  </div>

                  <div
                    onClick={() => {
                      handleChangeIdx(0, 5);
                    }}
                    className={
                      projectList[0].currentIdx === 5
                        ? styles.emphasis
                        : styles.normal
                    }
                  >
                    <div>High Quality 3D 데이터 페이지 개발</div>
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

export default Samsung;
