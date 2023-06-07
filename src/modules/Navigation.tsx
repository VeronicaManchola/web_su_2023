import React, { Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import logo from '@assets/images/logo.webp';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

interface Section {
  title: string;
  url: string;
  hash?: string;
  id: string;
}
interface HeaderProps {
  sections: Section[];
  title: string;
}

const Navigation = (props: HeaderProps) => {
  const { sections, title } = props;
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
      <AppBar position="static" sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ maxHeight: 64 }}>
            <Typography
              component="a"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                router.push('/');
              }}
              sx={{ border: 'none', padding: 0, background: 'none', cursor: 'pointer' }}
            >
              <Box width={220} sx={{ height: '64px' }}>
                <Image src={logo} layout="responsive" width="214px" height="62px" alt={title} />
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
                        router.push({ pathname: section.url, hash: section.hash }, undefined, { scroll: false });
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
                  sx={{ my: 2, ml: `${index === 0 ? 'auto' : '10px'}`, color: 'secondary.main', fontWeight: 600 }}
                >
                  <Button
                    onClick={() => {
                      if (section.hash && section.url === router.pathname) {
                        const id = section.hash;
                        const element = document.getElementById(id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        router.push({ pathname: section.url, hash: section.hash }, undefined, { scroll: false });
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
