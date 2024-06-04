import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaul";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello World!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
