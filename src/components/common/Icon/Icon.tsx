import { createElement } from 'react'
import * as MaterialDesign from 'react-icons/md'
import { IconView } from './styles'

interface Props {
  id: keyof typeof MaterialDesign
  error?: boolean
}
const Icon = ({ id, error }: Props) => {
  function icon (iconName: keyof typeof MaterialDesign = 'MdFingerprint') {
    const mdIcon = createElement(MaterialDesign[iconName])
    if (mdIcon.type === undefined) {
      return createElement(MaterialDesign['MdApi'])
    }
    return mdIcon
  }
  return <IconView>{icon(id)}</IconView>
}

export default Icon
