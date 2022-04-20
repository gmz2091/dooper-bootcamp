/* eslint-disable no-unused-vars */
import 'styled-components'
import { Theme } from '@mui/material/styles'
import { CustomTheme } from './interfaces/interface'

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
