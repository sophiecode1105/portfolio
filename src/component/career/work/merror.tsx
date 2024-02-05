import { useEffect, useRef, useState } from "react";
import styles from "./common.module.scss";
import Carousel from "../../common/carousel";

function Merror() {
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const [projectList, setProjectList] = useState([
    {
      project: "merror",
      currentIdx: 1,
      maxNum: 9,
    },
  ]);

  const handleChangeIdx = (pridx: number, newCurrentIdx: number) => {
    console.log("어케나옴", pridx, newCurrentIdx);
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
            <div className={styles.project_title}>ME.RROR</div>
            <div>2022.06-2023-10</div>
          </div>

          <div className={styles.desc_box}>
            <div className={styles.desc_1}>
              <span>
                ME.RROR는 사람, 사물, 공간의 다양한 3D 콘텐츠를 구매할 수 있는
                3D 콘텐츠 플랫폼입니다.
              </span>
              <span>초기 합류 멤버로서 프론트 엔드를 담당했습니다.</span>
              <span>
                PM, UI디자이너, 마케터, 백엔드 개발자 등 다양한 직군과 협업을
                통하여 서비스를 개발한 경험이 있습니다.
              </span>
              <span>사용스택: Angular TS</span>
              <div className={styles.link_wrapper}>
                {/* <div>
                  <Image
                    className={styles.link_icon}
                    src={link_icon}
                    alt="link_icon"
                  />
                  <span>미러 관련 링크</span>
                </div>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="https://me-rror.com/ko/"
                  target="_blank"
                >
                  <div className={styles.button}>미러 홈페이지</div>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="https://www.issuenbiz.com/news/articleView.html?idxno=19309"
                  target="_blank"
                >
                  <div className={styles.button}>
                    리뉴얼 전 플랫폼 오픈 기사
                  </div>
                </Link> */}
              </div>
            </div>
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
                홈페이지 리뉴얼로 전페이지 반응형 구현
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
                <div>메인 페이지 슬라이더 제작</div>
                <li>반응형 슬라이더 제작</li>
                <li>
                  <span>컴포넌트화</span>하여 재활용
                </li>
                <li>
                  드래그및 터치이벤트 <span>객체지향적 코드</span>로 작성하여
                  여러곳에서 재사용
                </li>
                <li>라이브러리를 사용하지 않고 순수 자바스크립트로 구현</li>
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
                <div>쿠폰 기능</div>
                <li>쿠폰 기획 참여</li>
                <li>
                  <span>백엔드 API와 연동</span>하여 발급된 myapge에서 프로모션
                  코드를 <span>발급</span>하고 order에서 <span>사용</span>하는
                  기능 개발 (결제정보에 쿠폰 정보 반영)
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
                <div>비회원 기능</div>
                <li>
                  서버와의 불필요한 데이터 교환 작업을 줄이며{" "}
                  <span>로컬스토리지 및 세션스토리지</span>를 사용하여 비회원시
                  장바구니, 즐겨찾기 사용 기능 개발
                </li>
                <li>
                  비회원 시 즐겨찾기 및 장바구니에 담아놓은 상품, 로그인 전환 후
                  해당 페이지에 없을 시 상품 추가 기능 개발
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
                <div>검색 기능</div>
                <li>
                  기존 코드 <span>리팩토링</span> 작업
                </li>
              </div>
              <div
                onClick={() => {
                  handleChangeIdx(0, 6);
                }}
                className={
                  projectList[0].currentIdx === 6
                    ? styles.emphasis
                    : styles.normal
                }
              >
                <div>필터 기능</div>
                <li>
                  메인 페이지에서 관련 아이콘 클릭시 전체 상품 페이지로 이동 후
                  필터 <span>동기화</span>구현
                </li>
              </div>
              <div
                onClick={() => {
                  handleChangeIdx(0, 7);
                }}
                className={
                  projectList[0].currentIdx === 7
                    ? styles.emphasis
                    : styles.normal
                }
              >
                <div>주요 페이지 개발</div>
                <li>상품 상세, 주문, 결제, 구매목록, 영수증 페이지 개발</li>
                <li>
                  <span>REST API를 활용</span>하여, 데이터를 시각화
                </li>
                <li>JSON파일을 통하여 한글, 영문 버전 관리</li>
              </div>
              <div
                onClick={() => {
                  handleChangeIdx(0, 8);
                }}
                className={
                  projectList[0].currentIdx === 8
                    ? styles.emphasis
                    : styles.normal
                }
              >
                <div>기타 페이지 개발</div>
                <li>ME.RROR BIZ 개발</li>
                <li>이벤트 페이지들 개발</li>
                <li>
                  다양한 <span>애니메이션</span>구현
                </li>
              </div>
              <div
                onClick={() => {
                  handleChangeIdx(0, 9);
                }}
                className={
                  projectList[0].currentIdx === 9
                    ? styles.emphasis
                    : styles.normal
                }
              >
                <div>관리자 페이지</div>
                <li>
                  실시간 서버 코드의 업데이트 과정을 그래프로 시각화하여 작업
                  관리 자들의 <span>사용자 경험을 향상</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div ref={leftContainerRef} className={styles.right_box}>
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

export default Merror;
