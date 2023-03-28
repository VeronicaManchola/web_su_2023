import type { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import getPage from '@utils/getPage';
import Banner from '@modules/Banner';
import Navigation from '@modules/Navigation';
import { navSections } from '@utils/constants';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00D9B4',
      contrastText: '#fff',
    },
    secondary: {
      main: '#415C65',
      contrastText: '#fff',
    },
    info: {
      main: '#999999',
    },
    background: {
      default: '#fff',
    },
  },
});

const App: NextPage = () => {
  const router = useRouter();
  const { pathname } = router;
  const Page = getPage(pathname);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner />
      <Navigation title="SuDent" sections={navSections} />
      <Page />
    </ThemeProvider>
  );
};

export default App;
