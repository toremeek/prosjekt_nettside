import { ThemeProvider } from 'styled-components';
import Toggle from '../components/Toggle';
import { useDarkMode } from '../components/UseDarkMode';
import { GlobalStyles } from './Global';

// Her må du legge til egne verdier
const lightTheme = {
  mycolors: {
    boxes: '#205180',
    background: '#c9c9c9',
    text: '#e7e7e7',
    alltext: '#000000',
  },
  shift: {
    html: 'white',
    background: '#ffffff',
    body: '#eeeeee',
    text: '#222831',
    toggleborder: '00adb5',
    button: '222831',
  },
  colors: {
    black: '#222831',
    grey: '#393e46',
    teal: '#205180',
    white: '#eeeeee',
    yellow: '#fed049',
    red: '#810034',
  },
};

const darkTheme = {
  mycolors: {
    boxes: '#000000',
    background: '#181818',
    text: '#ffffff',
    alltext: '#ffffff',
  },
  shift: {
    html: 'black',
    background: '#222831',
    body: '#393e46',
    text: '#eeeeee',
    toggleborder: '00adb5',
    button: '393e46',
    bilde: 'url(https://cdn.tek.no/pro/no/current/assets/images/stars.svg)',
    skygge: '0 0 60px 30px #222831',
  },
  colors: {
    black: '#222831',
    grey: '#393e46',
    teal: '#00adb5',
    white: '#eeeeee',
    yellow: '#fed049',
    red: '#810034',
  },
};

const Theme = ({ children }) => {
  const [theme, themeToggler, mounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Theme;
