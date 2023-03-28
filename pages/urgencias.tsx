import type { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '@modules/Navigation';
import Hero from '@modules/Hero';
import Contact from '@modules/Contact';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';

import header from '@assets/images/header.jpeg';
import headerMobile from '@assets/images/headerMobile.png';
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

const Urgencias: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation title="SuDent" sections={navSections} />
      <Hero image={header.src} mobileImage={headerMobile.src} description="mujer con dolor dental" />
      <Contact />
      <Box sx={{ position: 'fixed', bottom: '15px', right: '15px' }}>
        <Fab color="success" aria-label="whatsapp">
          <WhatsAppIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

export default Urgencias;
