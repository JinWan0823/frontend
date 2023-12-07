import { RecoilRoot } from "recoil";
import MainPage from "./Page/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Page/DetailPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<MainPage />} />
          <Route path={`/project/:Id`} element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
