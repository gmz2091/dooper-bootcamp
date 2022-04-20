import Link from 'next/link'
import { KeyboardEvent, MouseEvent } from 'react'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { DrawerMenuProps } from '@src/interfaces/interface'

const TemporaryDrawer = ({ isOpen, setClose, routes }: DrawerMenuProps) => {
  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        (event as KeyboardEvent).key !== 'Enter'
      ) {
        return
      }
      setClose(open)
    }

  const list = (anchor: any) => (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((text, index) => (
          <ListItem button key={text.label} onClick={toggleDrawer(false)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Link href={text.path}>
              <ListItemText primary={text.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
      {list('left')}
    </Drawer>
  )
}

export default TemporaryDrawer
