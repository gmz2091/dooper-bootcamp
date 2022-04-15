import Link from 'next/link'
import { MouseEvent, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { routes } from '../../router'
import DrawerMenu from '../DrawerMenu'
import { Text } from './styles'

export const Navbar = () => {
  const [isOpen, onClose] = useState(false)

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Text
                variant="h6"
                noWrap
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                LOGO
              </Text>
            </Link>
            <Box>
              <IconButton
                onClick={(e: MouseEvent) => onClose(!isOpen)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Link href="/">
              <Text
                variant="h4"
                noWrap
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                LOGO
              </Text>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerMenu
        isOpen={isOpen}
        setClose={() => onClose(!isOpen)}
        routes={routes}
      />
    </>
  )
}
