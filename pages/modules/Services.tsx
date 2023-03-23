import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useTheme from '@mui/material/styles/useTheme';

interface Section {
  id: string;
  image: string;
  title: string;
}

interface ServicesProps {
  id: string;
  sections: Section[];
}

const Services = (props: ServicesProps) => {
  const { id, sections } = props;
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Container id={id} sx={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {sections?.map((section) => {
          const {
            default: { src },
          } = require(`@assets/icons/${section.image}`);

          return (
            <Grid item xs={6} sm={4} md={3} key={section.id}>
              <Card sx={{ width: '100%', height: '100%', paddingTop: '16px' }}>
                <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image={src}
                    alt={section.title}
                    sx={{
                      height: '100px',
                      width: 'auto',
                      margin: '0 auto',
                    }}
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ textAlign: 'center', color: palette.secondary.main }}
                    >
                      {section.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Services;
