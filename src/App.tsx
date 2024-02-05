import { useLocation } from "react-router-dom";
import Routers from "./Router";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div>
      {/* {currentPath !== "/" ? <div>뭔지모름</div> : null} */}
      <Routers />
    </div>
  );
}

export default App;
