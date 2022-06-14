import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';

import { MainPage } from '../pages/MainPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { ListItemText } from '@mui/material';
import { CharacterPage } from '../pages/CharacterPage';

const drawerWidth = 240;

interface PageRoute {
  path: string;
  name: string;
  component: React.ReactNode;
  showInSidebar: boolean;
  icon?: React.ReactNode;
}

const routes: PageRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: <MainPage />,
    icon: <HomeIcon />,
    showInSidebar: true,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: <FavoritesPage />,
    icon: <StarIcon />,
    showInSidebar: true,
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: <CharacterPage />,
    showInSidebar: false,
  },
]

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = (path: string) => {
  
    navigate(path, { replace: true  }); 

  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {
              routes.map((route) => (
                route.showInSidebar &&
                  <ListItem
                    selected={location.pathname === route.path}
                    disablePadding
                    key={route.name}
                    onClick={() => handleClick(route.path)}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        {route.icon}
                      </ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItemButton>
                  </ListItem>
              ))
            }
          </List>
          </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          {
            routes.map((route) => (
              <Route key={route.name} path={route.path} element={ route.component } />
            ))
          }
                  
          <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>
      </Box>
    </Box>
  )
}
