import ThemeGlobalStyle from "./GlobalStyle";
import WrapComponents from "./WrapComponent";
import { RecoilRoot } from "recoil";


function App() {


  return (
    <RecoilRoot>
        <ThemeGlobalStyle />
        <WrapComponents />
    </RecoilRoot>
  );
}

export default App;
