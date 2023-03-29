import Link from '@mui/material/Link';

export const navSections = [
  { title: 'Especialidades', url: '/', hash: 'especialidades', id: 'especialidades' },
  { title: 'Urgencias', url: '/urgencias', id: 'urgencias' },
];

export const areasSections = [
  { id: 'urgencias-dentales', image: 'urgencia_dental.png', title: 'Urgencias Dentales', target: '/urgencias' },
  {
    id: 'odontopediatria',
    image: 'odontopediatria.png',
    title: 'Odontopediatría: Especialista en Niños',
    hash: 'odontopediatria',
  },
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

export const locationText = [
  'Encuéntranos en:',
  'AVENIDA LOS PAJARITOS 3195, OFICINA 505. MAIPÚ. Santiago RM',
  'A pasos del Metro Santiago Bueras. Línea 5',
  'Contamos con todo medio de pago.',
];

export const scheduleText = [
  'Debido a la emergencia sanitaria generada por Covid-19 estamos atendiendo sólo con RESERVA de hora.',
  <span>
    Para garantizar tu atención debes realizar la reserva por WhatsApp o llamado al número{' '}
    <Link href="tel:+56931811912" underline="none" color="primary" variant="inherit">
      +56 9 3181 1912
    </Link>
  </span>,
  <div style={{ marginTop: '20px' }}>HORARIO DE ATENCION:</div>,
  'Martes a Domingo de 8:30 - 21:30 Hrs con hora reservada para garantizar tu atención.',
];
