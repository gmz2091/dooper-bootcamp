import Link from 'next/link'
import { MouseEvent, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const pagesRoues = [
  {
    path: '/login',
    label: 'Login'
  },
  {
    path: '/profile',
    label: 'Profile'
  },
  {
    path: '/register',
    label: 'Sign Up'
  }
]

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pagesRoues.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link href={page.path}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ color: 'black' }}
                    >
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/">
            <Typography
              variant="h4"
              noWrap
              component="h4"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pagesRoues.map((page) => (
              <Button key={page.label} onClick={handleCloseNavMenu}>
                <Link href={page.path}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
