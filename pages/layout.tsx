import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Banner from '@modules/Banner';
import Hero from '@modules/Hero';
import Navigation from '@modules/Navigation';
import { navSections } from '@utils/constants';

import header from '@assets/images/header.jpeg';
import headerMobile from '@assets/images/headerMobile.png';

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

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner />
      <Navigation title="SuDent" sections={navSections} />
      <Hero
        image={header.src}
        mobileImage={headerMobile.src}
        description="mujer con dolor dental"
        href="https://linktr.ee/sudenturgenciadentalmaipu"
      />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
