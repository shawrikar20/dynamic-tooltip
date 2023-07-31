import "./App.css";
import MobileScreen from "./components/MobileScreen";
import Form from "./components/Form";
import { RootContextProvider } from "./context/rootContext";
function App() {
  return (
    <div className="body-container">
      <RootContextProvider>
        <Form />
        <MobileScreen />
      </RootContextProvider>
    </div>
  );
}

export default App;
