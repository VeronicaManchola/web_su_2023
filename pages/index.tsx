import type { NextPage } from 'next';
import { Fragment } from 'react';
import Hero from '@modules/Hero';
import Services from '@modules/Services';
import Contact from '@modules/Contact';
import { areasSections, locationText, scheduleText } from '@utils/constants';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import location from '@assets/images/location.jpeg';
import locationMobile from '@assets/images/locationMobile.jpeg';
import schedule from '@assets/images/schedule.jpeg';
import scheduleMobile from '@assets/images/scheduleMobile.jpeg';
import Head from 'next/head';

const Home: NextPage = () => {
  const {
    default: { src: ogImg },
  } = require(`@assets/images/og_img.jpg`);

  return (
    <Fragment>
      <Head>
        <title>SuDent Clinic - Inicio</title>
        <meta
          name="description"
          content="Sudent Clinic - Servicio de Urgencia Dental - Especialistas en Urgencias dentales. Todas las urgencias dentales las atendemos (dolor, fracturas, infecciones, etc.)"
        />
        <meta
          name="keywords"
          content="urgencia dental, maipu, sudent, protesis dentales, endodoncia, corona dental, ortodoncia, tratamiento de conducto, dentista niño, limpieza destartraje dental, blanqueamiento dental, dolor de diente muela"
        />
        <meta property="og:title" content="SuDent Clinic - Urgencias Dentales" />
        <meta
          property="og:description"
          content="SuDent Clinic Servicio de Urgencia Dental sede Maipu. Especialistas en Urgencias dentales. Todas las urgencias dentales las atendemos (dolor, fracturas, infecciones, etc.)"
        />
        <meta property="og:image" content={ogImg} />
      </Head>
      <Hero
        image={location.src}
        mobileImage={locationMobile.src}
        description="ubicacion consultorio"
        href="https://goo.gl/maps/kaZemArB3RFsf5SS7"
      >
        <Grid item xs={12} display="flex" alignItems="center" justifyContent="center" mt="20px" flexDirection="column">
          {locationText.map((text, index) => (
            <Typography key={`locationText${index}`} component="h6" variant="h6" textAlign="center">
              {text}
            </Typography>
          ))}
        </Grid>
      </Hero>
      <Hero
        image={schedule.src}
        mobileImage={scheduleMobile.src}
        description="horario consultorio"
        href="https://n9.cl/tm0ht"
      >
        <Grid item xs={12} display="flex" alignItems="center" justifyContent="center" mt="20px" flexDirection="column">
          {scheduleText.map((text, index) => (
            <Typography key={`scheduleText${index}`} component="h6" variant="h6" textAlign="center">
              {text}
            </Typography>
          ))}
        </Grid>
      </Hero>
      <Services sections={areasSections} id="especialidades" />
      <Contact />
    </Fragment>
  );
};

export default Home;
