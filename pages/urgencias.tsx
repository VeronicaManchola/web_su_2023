import type { NextPage } from 'next';
import { Fragment } from 'react';
import Contact from '@modules/Contact';
import { areasDescription, areasSections } from '@utils/constants';
import DetailCard from '@modules/DetailCard';
import Container from '@mui/material/Container';

const Urgencias: NextPage = () => {
  const title = areasSections[0].title;
  const content = areasDescription.urgencias;
  const {
    default: { src },
  } = require(`@assets/images/${areasDescription.urgencias.image}`);

  return (
    <Fragment>
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
