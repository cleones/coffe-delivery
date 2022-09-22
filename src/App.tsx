import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { ShopCartProvider } from './context/ShopCartContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ShopCartProvider>
        <Router />
      </ShopCartProvider>
    </ThemeProvider>
  );
}

export default App;
