import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core';
import SearchPokemonsUnoptimized from './SearchPokemonsUnoptimized';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a36d6"
    },
    secondary: {
      main: "#ffffff"
    }
  }
})

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
         <h1>Pokesmon</h1>
         <SearchPokemonsUnoptimized />
      </ThemeProvider>
    </div>
  );
}

export default App;
