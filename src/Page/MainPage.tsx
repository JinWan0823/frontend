import ThemeGlobalStyle from "../GlobalStyle";
import Sidebar from "../Header/SideBar";
import WrapComponents from "../WrapComponent";

export default function MainPage() {
  return (
    <>
      <ThemeGlobalStyle />
      <Sidebar />
      <WrapComponents />
    </>
  );
}
