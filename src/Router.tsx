import { Route, Routes } from "react-router-dom";
import Main from "./main";
import Merror from "./component/career/work/merror";
import Samsung from "./component/career/work/samgsung";
import Smart from "./component/career/work/smart";
import Ssokbeer from "./component/project/ssokbeer";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/merror" element={<Merror />} />
      <Route path="/samsung_anthropometric" element={<Samsung />} />
      <Route path="/smart_things" element={<Smart />} />
      <Route path="/ssokbeer" element={<Ssokbeer />} />
    </Routes>
  );
};

export default Routers;
