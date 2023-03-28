import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ name: 'Services' })((theme) => ({
  container: {
    marginTop: '20px',
  },
  slider: {
    height: '250px',
  },
  slickArrow: {
    '&:before': {
      fontSize: '30px',
      color: theme.palette.info.main,
    },
  },
}));

export default useStyles;
