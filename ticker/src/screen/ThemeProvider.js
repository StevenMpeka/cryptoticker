import {ThemeProvider} from "@mui/styles"
import {createTheme, responsiveFontSizes} from "@mui/material/styles"
import CoinScreen from "./CoinScreen";

let theme = createTheme();
theme = responsiveFontSizes(theme);

<ThemeProvider theme={theme}>
    <CoinScreen/>
</ThemeProvider>

export default ThemeProvider;