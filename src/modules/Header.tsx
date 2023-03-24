import React from 'react';
import header from '@assets/images/header.jpeg';
import headerMobile from '@assets/images/headerMobile.png';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item xs={12}>
          <picture>
            <source srcSet={headerMobile.src} media="(max-width: 600px)" />
            <img src={header.src} alt="mujer con dolor dental" width="100%" />
          </picture>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
