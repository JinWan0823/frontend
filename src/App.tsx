import ThemeGlobalStyle from "./GlobalStyle";
import WrapComponents from "./WrapComponent";
import { RecoilRoot } from "recoil";
import Sidebar from "./Header/SideBar";

function App() {
  return (
    <RecoilRoot>
      <ThemeGlobalStyle />
      <Sidebar />
      <WrapComponents />
    </RecoilRoot>
  );
}

export default App;
