import React, { Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import logo from '@assets/images/logo.jpeg';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
    hash?: string;
    id: string;
  }>;
  title: string;
}

const Navigation = (props: HeaderProps) => {
  const { sections, title } = props;
  const { palette } = useTheme();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fragment>
      <AppBar position="static" sx={{ bgcolor: palette.background.default }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', maxHeight: 64 }}>
            <Typography
              component="button"
              onClick={() => router.push('/')}
              sx={{ border: 'none', padding: 0, background: 'none' }}
            >
              <Box width={220}>
                <img src={logo.src} alt={title} style={{ maxWidth: '220px' }} />
              </Box>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
                variant="outlined"
                sx={{ ml: 'auto', minWidth: '50px', padding: '10px' }}
              >
                <MenuIcon fontSize="medium" />
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {sections?.map((section) => (
                  <MenuItem
                    key={section.id}
                    onClick={() => {
                      handleCloseNavMenu();

                      if (section.hash && section.url === router.pathname) {
                        const id = section.hash;
                        const element = document.getElementById(id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        router.push({ pathname: section.url, hash: section.hash }, section.url, { scroll: false });
                      }
                    }}
                  >
                    <Typography textAlign="center">{section.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {sections?.map((section, index) => (
                <Box
                  key={section.id}
                  sx={{ my: 2, ml: `${index === 0 ? 'auto' : '10px'}`, color: palette.secondary.main, fontWeight: 600 }}
                >
                  <Button
                    onClick={() => {
                      if (section.hash && section.url === router.pathname) {
                        const id = section.hash;
                        const element = document.getElementById(id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        router.push({ pathname: section.url, hash: section.hash }, section.url, { scroll: false });
                      }
                    }}
                    color="secondary"
                  >
                    {section.title}
                  </Button>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Navigation;
