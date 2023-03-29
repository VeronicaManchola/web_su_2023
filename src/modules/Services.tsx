import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import useTheme from '@mui/material/styles/useTheme';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

interface Section {
  id: string;
  image: string;
  title: string;
  target?: string;
  hash?: string;
}

interface ServicesProps {
  id: string;
  sections: Section[];
}

const Services = (props: ServicesProps) => {
  const { id, sections } = props;
  const theme = useTheme();
  const { palette } = theme;
  const router = useRouter();

  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Container id={id}>
      <Slider {...settings}>
        {sections?.map((section) => {
          const {
            default: { src },
          } = require(`@assets/icons/${section.image}`);

          return (
            <Box
              key={section.id}
              sx={{
                height: '220px',
                borderColor: 'rgba(65, 92, 101, 0.7)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '5px',
              }}
            >
              <CardActionArea
                sx={{ height: '100%', paddingTop: '16px', display: 'flex', flexDirection: 'column' }}
                onClick={() => {
                  if (section.hash) {
                    const id = section.hash;
                    const element = document.getElementById(id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push({ pathname: section.target }, section.target, { scroll: false });
                  }
                }}
              >
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
