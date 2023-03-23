import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Contact = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Box
      sx={{ backgroundColor: palette.info.main, marginTop: '20px', width: '100%', color: palette.primary.contrastText }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography>
              <Link href={`mailto:contacto@sudentclinic.cl`}>contacto@sudentclinic.cl</Link> /
              <Link href={`mailto:contacto@sudentclinic.cl`}>contacto@sudentclinic.cl</Link>
            </Typography>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
