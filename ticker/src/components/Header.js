import {
    AppBar,
    Button,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@mui/material";
  import {
    createTheme,
    
    ThemeProvider,
  } from "@mui/material/styles";
  import { useNavigate } from "react-router-dom";
  import { makeStyles } from"@mui/styles";
  import { CryptoState } from "../CryptoContext";
  import AuthModal from "../authentication/AuthModal";
import UserSidebar from "../authentication/UserSidebar";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    const { currency, setCurrency, user } = CryptoState();
  
    const navigate = useNavigate();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="secondary" position="fixed" zIndex="99">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate(`/`)}
                variant="h6"
                className={classes.title}
              >
                Crypto
              </Typography>
             
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15, backgroundColor: "red", color: "inherit" }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
              </Select>
              {user ? <UserSidebar /> : <AuthModal />}

            </Toolbar>
          </Container>
        </AppBar>
        <br/>
        <br/>
        <br/>
      </ThemeProvider>
    );
  }
  
  export default Header;