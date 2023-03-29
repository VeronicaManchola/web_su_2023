import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

interface HeroProps {
  image: string;
  mobileImage: string;
  description?: string;
  href?: string;
  children?: React.ReactNode;
}

const Hero = (props: HeroProps) => {
  const { image, mobileImage, description, href, children } = props;
  const component = href ? 'a' : 'div';
  const finalHref = href || '';

  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters>
        <Grid container component={component} href={finalHref}>
          <Grid item xs={12}>
            <picture>
              <source srcSet={mobileImage} media="(max-width: 600px)" />
              <img src={image} alt={description} width="100%" />
            </picture>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ marginBottom: '30px' }}>
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Hero;
