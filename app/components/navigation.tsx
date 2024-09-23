'use client';
import { Toolbar, Typography, IconButton, Drawer, List, ListItem, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { pages } from "../constants/pages";
import { useTheme } from '@mui/material/styles';

export default function Navigation() {
  const theme = useTheme();
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  function isHomePage(): boolean {
    return pathname === '/';
  }

  const toggleDrawer = (state: boolean) => {
    return setNavOpen(state);
  };

  const links = pages.map((page) => (
    <ListItem key={page.id}>
      <Link
        href={page.route}
        component={NextLink}
        color="primary"
        underline={page.route === pathname ? "always" : "hover"}
        variant="button"
        onClick={() => toggleDrawer(false)}
      >
        {page.label}
      </Link>
    </ListItem>
  ));

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex-end', borderBottom: isHomePage() ? '' : '1px solid #d1d1abb3' }}>
        {!isHomePage() && (
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Tara & Adam
          </Typography>
        )}
        {navOpen ? (
          <IconButton
            size="large"
            color="primary"
            aria-label="close"
            onClick={() => toggleDrawer(false)}
            sx={{ zIndex: 1400 }}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ zIndex: 1400 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <Drawer anchor={'top'} open={navOpen} onClose={() => toggleDrawer(false)} PaperProps={{
        sx: {
          backgroundColor: theme.palette?.background?.default,
        },
      }}>
        <List>
          {links}
        </List>
      </Drawer>
    </AppBar>
  );
}