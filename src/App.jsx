import { UserProvider } from "./contexts/AuthContext";
import MyModalProvider from "./contexts/MyModalContext";
import { MainRouter } from "./router";

function App() {
  return (
    <UserProvider>
      <MyModalProvider>
        <MainRouter />
      </MyModalProvider>
    </UserProvider>
  );
}

export default App;
