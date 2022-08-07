import { makeStyles } from "@mui/styles";
import HomeScreen from "./screen/HomeScreen";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CoinScreen from "./screen/CoinScreen";
import Header from "./components/Header";
import Alert from "./components/Alert";
import News from "./components/News";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
    <Routes>
        <Route path="/" element={<HomeScreen/>} exact />
        {/* <Route path="/news" element={<News/>} exact /> */}
        <Route path="/coins/:id" element={<CoinScreen/>} exact />
    </Routes>
    <Alert />
    </div>
  );
}

export default App;
