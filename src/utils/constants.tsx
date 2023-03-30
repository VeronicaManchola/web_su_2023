import Link from '@mui/material/Link';

interface AreaDescription {
  [key: string]: {
    image: string;
    text: JSX.Element;
    secondaryText?: JSX.Element;
    preImage?: JSX.Element;
  };
}

export const navSections = [
  { title: 'Especialidades', url: '/', hash: 'especialidades', id: 'especialidades' },
  { title: 'Urgencias', url: '/urgencias', id: 'urgencias' },
];

export const areasSections = [
  { id: 'urgencias-dentales', image: 'urgencia_dental.png', title: 'Urgencias Dentales', target: '/urgencias' },
  { id: 'odontopediatria', image: 'odontopediatria.png', title: 'Odontopediatría: Especialista en Niños' },
  { id: 'odontogeriatria', image: 'odontogeriatria.png', title: 'Odontogeriatría: Especialista en Adulto Mayor' },
  { id: 'protesis', image: 'protesis.png', title: 'Protesis Fija / Corona / Incrustación' },
  { id: 'ortodoncia', image: 'ortodoncia.png', title: 'Ortodoncia / Frenillos' },
  { id: 'implantes', image: 'implantes.png', title: 'Implantes Dentales' },
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

export const areasDescription: AreaDescription = {
  urgencias: {
    image: 'urgencias.jpeg',
    preImage: (
      <p>
        Una urgencia dental se refiere a cualquier problema dental que requiere atención inmediata. Esto puede incluir
        dolor intenso, inflamación, sangrado o lesiones en la boca. Las causas comunes de urgencias dentales incluyen
        caries avanzadas, infecciones dentales, traumatismos.
      </p>
    ),
    text: (
      <>
        <p>Algunos ejemplos son:</p>
        <ul>
          <li>Dolor Dental o Facial</li>
          <li>Dolor al morder, al comer, con alimentos fríos o calientes.</li>
          <li>Fracturas dentales</li>
          <li>Aumento de volumen (hinchazón)</li>
          <li>Tratamiento de Infecciones</li>
          <li>Desprendimiento de Corona o Tapaduras</li>
          <li>Fractura de prótesis</li>
          <li>
            Exodoncias de urgencia: Sacar muelas del juicio, sacar dientes fracturados, en malas condiciones o que
            causen mucho dolor.
          </li>
          <li>Ortoncia/ Frenillos: alambre desprendido o la caída de un bracket.</li>
          <li>
            Trepanación: maniobra previa al tratamiento de conducto o endodoncia que causa el alivio y descompresión de
            dolor dental para mantener el diente.
          </li>
          <li>Accidente como caída o golpes que afecten a los dientes</li>
        </ul>
      </>
    ),
    secondaryText: (
      <>
        <p>
          Es importante buscar atención dental de urgencia tan pronto como sea posible porque las urgencias dentales
          pueden empeorar rápidamente si no se tratan adecuadamente. Si no se trata, una infección dental puede
          extenderse a otras áreas de la boca y el cuerpo, lo que puede poner en peligro la salud general. Además, el
          dolor y la incomodidad asociados con las urgencias dentales pueden interferir en la capacidad de una persona
          para llevar a cabo sus actividades diarias.
        </p>
        <p>
          Al buscar atención dental de urgencia, un profesional dental puede evaluar la gravedad del problema y tomar
          medidas para aliviar el dolor, controlar la infección y prevenir complicaciones adicionales. También pueden
          proporcionar consejos sobre cómo prevenir futuras urgencias dentales.
        </p>
        <p>
          Es importante recordar que la prevención es la mejor manera de evitar urgencias dentales. Esto implica
          mantener una buena higiene oral, programar exámenes dentales regulares y tratar cualquier problema dental en
          sus primeras etapas antes de que se convierta en una urgencia.
        </p>
      </>
    ),
  },
  odontopediatria: {
    image: 'odontopediatria.jpeg',
    text: (
      <ul>
        <li>Mi primera consulta - Adaptación al niño</li>
        <li>Tapaduras (obturaciones)</li>
        <li>Limpieza dental o destartrajes</li>
        <li>Frenillos para niños: Placas expansoras</li>
        <li>Fluoración</li>
        <li>Sellantes</li>
        <li>Tratamiento de conducto para niños</li>
        <li>Pulpotomía o Pulpectomía</li>
        <li>Exodoncias pediátricas</li>
        <li>Urgencia dental para niños</li>
        <li>Ortopedia o Frenillos para niños</li>
      </ul>
    ),
  },
  odontogeriatria: {
    image: 'odontogeriatria.jpeg',
    text: (
      <ul>
        <li>Tapaduras simples (obturaciones)</li>
        <li>Limpieza dental o destartrajes (simples)</li>
        <li>Prótesis dentales: Totales, Acrílica, Metálicas y Parciales</li>
        <li>Reparación de Prótesis</li>
        <li>Provisorios</li>
        <li>Coronas</li>
        <li>Puentes</li>
        <li>Boca Seca</li>
        <li>Carillas dentales</li>
        <li>Urgencia dental</li>
      </ul>
    ),
  },
  protesis: {
    image: 'protesis.jpeg',
    text: (
      <ul>
        <li>Prótesis Fija Unitaria (Corona)</li>
        <li>Coronas Metal Porcelana</li>
        <li>Coronas Libre de Metal</li>
        <li>Incrustaciones de metal, resina o porcelana</li>
      </ul>
    ),
  },
  ortodoncia: {
    image: 'ortodoncia.jpeg',
    text: (
      <ul>
        <li>Corrección de la posición de huesos y dientes que se encuentren desalineados o mal posicionados.</li>
        <li>Para niños y adultos</li>
        <li>Ortodoncia tradicional: Brackets Metálicos</li>
        <li>Ortodoncia Lingual: Brackets en el lado interno de los dientes</li>
        <li>Aparatos Transparentes u Ortodoncia Invisible</li>
        <li>Brackets de Cerámica: Bracket de color blanco</li>
        <li>Prótesis Fija Unitaria</li>
        <li>Coronas Metal Porcelana</li>
        <li>Coronas Libre de Metal</li>
      </ul>
    ),
  },
  implantes: {
    image: 'implantes.jpeg',
    text: (
      <ul>
        <li>Restauración de diente o varios dientes de forma fija</li>
        <li>
          Implantes de <strong>Titanio</strong>
        </li>
        <li>Corona de Porcelana definitiva sobre el o los implantes dentales</li>
      </ul>
    ),
  },
  general: {
    image: 'general.jpeg',
    text: (
      <ul>
        <li>Primera consulta: Diagnostico global y plan de tratamiento</li>
        <li>Tratamiento de caries</li>
        <li>Prevención de caries</li>
        <li>Tratamiento de sensibilidad dentaria</li>
        <li>Restauración en Resina (Tapaduras de color del diente)</li>
        <li>Rehabilitación dental</li>
      </ul>
    ),
  },
  estetica: {
    image: 'estetica.jpeg',
    text: (
      <ul>
        <li>Peeling Químico: Limpieza profunda</li>
        <li>
          Ácido Hialurónico: Perfilado de labios, Tratamiento de ojeras, Lifting facial, Perfil de nariz
          (Rinomodelación), Contorno mandibular, Código de barra en labios, Masculinización o Feminización Facial.
        </li>
        <li>Tratamiento con Tóxina Botulínica (Botox): Patas de gallo, arrugas en frente, arrugas entrecejo</li>
        <li>Mesoterapia con vitaminas: Mejora la calidad, luminosidad y la firmeza de la piel</li>
        <li>Bichectomía sin cirugía</li>
      </ul>
    ),
  },
  endodoncia: {
    image: 'endodoncia.jpeg',
    text: (
      <ul>
        <li>Tratamiento que intenta conservar el diente después de infección o inflamación.</li>
        <li>Elimina el interior del diente (Nervios y vasos sanguíneos) dañado causante de dolor.</li>
        <li>Rellena el interior del diente</li>
      </ul>
    ),
  },
  exodoncia: {
    image: 'exodoncia.jpeg',
    text: (
      <ul>
        <li>Extraer/Sacar Dientes en mal estado o con mal pronóstico</li>
        <li>Extraer/Sacar Dientes que causan infección o dolor</li>
        <li>Extraer/Sacar Muelas del juicio</li>
        <li>Extraer/Sacar Dientes indicados para ortodoncia (por falta de espacio)</li>
      </ul>
    ),
  },
  periodoncia: {
    image: 'periodoncia.jpeg',
    text: (
      <ul>
        <li>Tratamiento de encías</li>
        <li>Tratamiento en encías que sangran</li>
        <li>Detención de perdida ósea que causa que se suelten los dientes</li>
        <li>Tratamiento de gingivitis y periodontitis</li>
        <li>Eliminación de sarro superficial y profundo</li>
        <li>Eliminación de sarro superficial y profundo</li>
        <li>Recorte de encías para alargar el diente</li>
      </ul>
    ),
  },
  blanqueamiento: {
    image: 'blanqueamiento.jpeg',
    text: (
      <ul>
        <li>Mejora el tono de los dientes</li>
        <li>Blanqueamiento profesional</li>
        <li>Fotos de antes y después</li>
        <li>Técnica conservadora que no causa daño a los dientes</li>
      </ul>
    ),
  },
  carillas: {
    image: 'carillas.jpeg',
    text: (
      <ul>
        <li>Mejora la forma y color de los dientes</li>
        <li>Diseño de Sonrisa</li>
        <li>Carillas de Resina</li>
        <li>Carillas de Porcelana</li>
      </ul>
    ),
  },
  removible: {
    image: 'removible.jpeg',
    text: (
      <ul>
        <li>Devolver uno o varios dientes</li>
        <li>Prótesis Total: todos los dientes</li>
        <li>Prótesis Parcial metálica</li>
        <li>Prótesis Parcial acrílica</li>
      </ul>
    ),
  },
  bruxismo: {
    image: 'bruxismo.jpeg',
    text: (
      <ul>
        <li>Tratamiento de causas de bruxismo</li>
        <li>Planos de Relajación personalizados</li>
        <li>Tratamiento de dolor articular</li>
      </ul>
    ),
  },
};

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
