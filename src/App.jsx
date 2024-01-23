import { Provider } from "react-redux";
import { UserProvider } from "./contexts/AuthContext";
import { MyLoadingProvider } from "./contexts/LoadingContext";
import MyModalProvider from "./contexts/MyModalContext";
import { MainRouter } from "./router";
import { BasketProvider } from "./contexts/BasketContext";
import { PaginationProvider } from "./contexts/PaginationContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserProvider>
      <PaginationProvider>
        <MyLoadingProvider>
          <MyModalProvider>
            <BasketProvider>
              <ToastContainer />
              <MainRouter />
            </BasketProvider>
          </MyModalProvider>
        </MyLoadingProvider>
      </PaginationProvider>
    </UserProvider>
  );
}

export default App;
