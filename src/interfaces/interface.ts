interface Route {
  path: string
  label: string
}

export interface DrawerMenuProps {
  isOpen: boolean
  setClose: (isOpen: boolean) => void
  routes: Route[]
}

export interface CustomTheme {
  colors: {
    primary: string
    secondary: string
  }
  bgColor: {
    primary: string
    secondary: string
  }
}
