import styles from "./project_detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Ssokbeer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.curtain}>
        <div data-aos="fade-up" data-aos-delay="1000">
          SSOKBEER
        </div>
      </div>
      <div className={styles.desc_box}>
        <div className={styles.alignment}>
          <div>about</div>
          <div>role</div>
          <div>stack</div>
          <div>'코드스테이츠' 부트캠프에서 작업했던 12일 프로젝트입니다.</div>
          <div>
            부트캠프에서 배웠던 프로그래밍 언어와 라이브러리를 사용하여,
            작업했습니다.
          </div>
          <div>
            이론으로 배웠던 것들을 실제로 사용하고 만들어보며, 개발에 더 큰
            흥미를 느끼게 된 계기였습니다.
          </div>
          <div>
            개발자로서의 첫 프로젝트로, 협업하는법과 코드 리뷰를 경험해봤습니다.
          </div>
          <div>
            코드 리뷰로 Front, BackEnd 간 <span>통신 프로세스</span>를
            이해했습니다.
          </div>
          <div>
            프로그램이 데이터를 처리하기 위해 필요한 기능인 CRUD(커뮤니티페이지
            검색, 등록, 상세보기, 수정)를 구현해봤습니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ssokbeer;
