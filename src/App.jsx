import { Routes, Route } from "react-router-dom";
import Layouts from './components/Layouts';
import AlexData from "./components/pages/AlexData";
import BillData from "./components/pages/BillData";
import TomData from "./components/pages/TomData";
import Food from "./components/Food";
// import Fooditem from "./components/Fooditem";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layouts />}>

          <Route path="/AlexData" element={<AlexData />} />
          <Route path="/BillData" element={<BillData />} />
          <Route path="/TomData" element={<TomData />} />
          <Route path="/:type" element={<Food />} />
          {/* <Route path="/:nameItem" element={<Fooditem />} /> */}

        </Route>
      </Routes>

    </div>
  )
}