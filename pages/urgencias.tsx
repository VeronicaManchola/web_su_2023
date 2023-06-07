import type { NextPage } from 'next';
import { Fragment } from 'react';
import Contact from '@modules/Contact';
import { areasDescription, areasSections } from '@utils/constants';
import DetailCard from '@modules/DetailCard';
import Container from '@mui/material/Container';
import Head from 'next/head';

const Urgencias: NextPage = () => {
  const title = areasSections[0].title;
  const content = areasDescription.urgencias;
  const {
    default: { src },
  } = require(`@assets/images/${areasDescription.urgencias.image}`);
  const {
    default: { src: ogImg },
  } = require(`@assets/images/og_img.webp`);

  return (
    <Fragment>
      <Head>
        <title>SuDent Clinic - Urgencias Dentales</title>
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
        <meta property="og:image:alt" content="Logo de la clinica SuDent Clinic Servicio de Urgencia Dental" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sudentclinic.cl" />
      </Head>
      <Container id="urgenciasDetail">
        <DetailCard
          title={title}
          text={content.text}
          image={src}
          secondaryText={content.secondaryText}
          preImage={content.preImage}
        />
      </Container>
      <Contact />
    </Fragment>
  );
};

export default Urgencias;
