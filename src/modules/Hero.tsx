import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

interface HeroProps {
  image: string;
  mobileImage: string;
  description?: string;
  href?: string;
}

const Header = (props: HeroProps) => {
  const { image, mobileImage, description, href } = props;
  const component = href ? 'a' : 'div';
  const finalHref = href || '';

  return (
    <Container maxWidth="xl" disableGutters sx={{ marginBottom: '30px' }}>
      <Grid container component={component} href={finalHref}>
        <Grid item xs={12}>
          <picture>
            <source srcSet={mobileImage} media="(max-width: 600px)" />
            <img src={image} alt={description} width="100%" />
          </picture>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
