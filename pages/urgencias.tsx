import type { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '@modules/Navigation';
import Header from '@modules/Header';
import Contact from '@modules/Contact';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';

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
const navSections = [
  { title: 'Especialidades', url: '/#especialidades', id: 'especialidades' },
  { title: 'Urgencias', url: '/urgencias', id: 'urgencias' },
];

const Urgencias: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation title="SuDent" sections={navSections} />
      <Header />
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
