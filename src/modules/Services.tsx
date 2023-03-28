import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import useTheme from '@mui/material/styles/useTheme';
import Slider from 'react-slick';
import Box from '@mui/material/Box';

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

  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id={id} className="container">
      <Slider {...settings} className="slider">
        {sections?.map((section) => {
          const {
            default: { src },
          } = require(`@assets/icons/${section.image}`);

          return (
            <Box key={section.id} sx={{ height: '220px' }}>
              <CardActionArea sx={{ height: '100%', paddingTop: '16px', display: 'flex', flexDirection: 'column' }}>
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
                  <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: palette.secondary.main }}>
                    {section.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Services;
