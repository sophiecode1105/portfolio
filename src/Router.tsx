import { Route, Routes } from "react-router-dom";
import Main from "./main";
import Merror from "./component/career/work/merror";
import Samsung from "./component/career/work/samgsung";
import Smart from "./component/career/work/smart";
import Ssokbeer from "./component/project/ssokbeer";
import Dongnebook from "./component/project/dongnebook";
import Googleform from "./component/project/googleform";
import Minesweeper from "./component/project/minesweeper";
import RandomMenu from "./component/project/random_menu";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/merror" element={<Merror />} />
      <Route path="/samsung_anthropometric" element={<Samsung />} />
      <Route path="/smart_things" element={<Smart />} />
      <Route path="/ssokbeer" element={<Ssokbeer />} />
      <Route path="/dongnebook" element={<Dongnebook />} />
      <Route path="/googleform" element={<Googleform />} />
      <Route path="/minesweeper" element={<Minesweeper />} />
      <Route path="/random_menu" element={<RandomMenu />} />
    </Routes>
  );
};

export default Routers;
