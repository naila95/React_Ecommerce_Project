import { UserProvider } from "./contexts/AuthContext";
import { MyLoadingProvider } from "./contexts/LoadingContext";
import MyModalProvider from "./contexts/MyModalContext";
import { MainRouter } from "./router";

function App() {
  return (
    <UserProvider>
      <MyLoadingProvider>
        <MyModalProvider>
          <MainRouter />
        </MyModalProvider>
      </MyLoadingProvider>
    </UserProvider>
  );
}

export default App;
