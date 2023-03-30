import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import styles from '@styles/Contact.module.css';

const Contact = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Box
      className={styles.shadow}
      sx={{
        backgroundColor: palette.info.main,
        marginTop: '20px',
        width: '100%',
        color: palette.primary.contrastText,
        textAlign: 'center',
      }}
    >
      <Container sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography>
              <Link href={`mailto:contacto@sudentclinic.cl`} color="inherit">
                contacto@sudentclinic.cl
              </Link>
              {' / '}
              <Link href={`mailto:serviciodeurgenciadental@gmail.com`} color="inherit">
                serviciodeurgenciadental@gmail.com
              </Link>
            </Typography>
            <Typography>Avda Parajitos 3159 oficina 505, Maipu / HORARIO: Martes a Viernes 15:30 a 20:30</Typography>
            <Typography>URGENCIA POR HORA DE LLEGADA</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
