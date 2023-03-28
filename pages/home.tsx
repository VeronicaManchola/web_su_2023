import type { NextPage } from 'next';
import { Fragment } from 'react';
import Hero from '@modules/Hero';
import Services from '@modules/Services';
import Contact from '@modules/Contact';
import { areasSections } from '@utils/constants';

import header from '@assets/images/header.jpeg';
import headerMobile from '@assets/images/headerMobile.png';
import location from '@assets/images/location.jpeg';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero image={header.src} mobileImage={headerMobile.src} description="mujer con dolor dental" />
      <Hero
        image={location.src}
        mobileImage={location.src}
        description="ubicacion consultorio"
        href="https://goo.gl/maps/kaZemArB3RFsf5SS7"
      />
      <Services sections={areasSections} id="especialidades" />
      <Contact />
    </Fragment>
  );
};

export default Home;
