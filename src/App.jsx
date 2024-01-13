import { Provider } from "react-redux";
import { UserProvider } from "./contexts/AuthContext";
import { MyLoadingProvider } from "./contexts/LoadingContext";
import MyModalProvider from "./contexts/MyModalContext";
import { MainRouter } from "./router";
import { BasketProvider } from "./contexts/BasketContext";

function App() {
  return (
    <UserProvider>
      <MyLoadingProvider>
        <MyModalProvider>
          <BasketProvider>
            <MainRouter />
          </BasketProvider>
        </MyModalProvider>
      </MyLoadingProvider>
    </UserProvider>
  );
}

export default App;
