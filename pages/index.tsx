import type { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '@modules/Navigation';
import Header from '@modules/Header';
import Services from '@modules/Services';
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
  { title: 'Especialidades', url: '#especialidades', id: 'especialidades' },
  { title: 'Urgencias', url: '/urgencias', id: 'urgencias' },
];
const areasSections = [
  { id: 'urgencias-dentales', image: 'urgencia_dental.png', title: 'Urgencias Dentales' },
  { id: 'odontopediatria', image: 'odontopediatria.png', title: 'Odontopediatría: Especialista en Niños' },
  { id: 'odontogeriatria', image: 'odontogeriatria.png', title: 'Odontogeriatría: Especialista en Adulto Mayor' },
  { id: 'protesis', image: 'protesis.png', title: 'Protesis Fija / Corona / Incrustación' },
  { id: 'implantes', image: 'implantes.png', title: 'Implantes Dentales' },
  { id: 'ortodoncia', image: 'ortodoncia.png', title: 'Ortodoncia / Frenillos' },
  { id: 'general', image: 'general.png', title: 'Odontología General' },
  { id: 'estetica', image: 'estetica.png', title: 'Estetíca Facial' },
  { id: 'endodoncia', image: 'endodoncia.png', title: 'Endodoncia / Tratamiento de Conducto' },
  { id: 'exodoncia', image: 'exodoncia.png', title: 'Exodoncia / Extracción de Dientes' },
  { id: 'periodoncia', image: 'periodoncia.png', title: 'Periodoncia / Limpieza Dental' },
  { id: 'blanqueamiento', image: 'blanqueamiento.png', title: 'Blanqueamiento Dental' },
  { id: 'carillas', image: 'carillas.png', title: 'Carillas' },
  { id: 'removible', image: 'removible.png', title: 'Reparación Removibles / Reparación' },
  { id: 'bruxismo', image: 'bruxismo.png', title: 'Tratamiento de Bruxismo' },
];

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation title="SuDent" sections={navSections} />
      <Header />
      <Services sections={areasSections} id="especialidades" />
      <Contact />
      <Box sx={{ position: 'fixed', bottom: '15px', right: '15px' }}>
        <Fab color="success" aria-label="whatsapp">
          <WhatsAppIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
