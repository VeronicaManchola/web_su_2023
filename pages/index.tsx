import type { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from './modules/Navigation';
import Header from './modules/Header';
import Services from './modules/Services';

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
];

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation title="SuDent" sections={navSections} />
      <Header />
      <Services sections={areasSections} id="especialidades" />
    </ThemeProvider>
  );
};

export default Home;
