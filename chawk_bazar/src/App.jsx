import MyModalProvider from "./contexts/MyModalContext";
import ModalProvider from "./contexts/MyModalContext";
import { MainRouter } from "./router";

function App() {
  return (
    <MyModalProvider>
      <MainRouter />
    </MyModalProvider>
  );
}

export default App;
