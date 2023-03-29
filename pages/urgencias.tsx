import type { NextPage } from 'next';
import { Fragment } from 'react';
import Contact from '@modules/Contact';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';

const Urgencias: NextPage = () => {
  return (
    <Fragment>
      <Contact />
      <Box sx={{ position: 'fixed', bottom: '15px', right: '15px' }}>
        <Fab color="success" aria-label="whatsapp">
          <WhatsAppIcon />
        </Fab>
      </Box>
    </Fragment>
  );
};

export default Urgencias;
