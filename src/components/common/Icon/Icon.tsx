import { createElement } from 'react'
import * as MaterialDesign from 'react-icons/md'
import { IconView } from './styles'

interface Props {
  id: string
}
const Icon = ({ id }: Props) => {
  function icon (iconName: string = 'MdFingerprint') {
    const mdIcon = createElement(MaterialDesign[iconName])
    if (mdIcon.type === undefined) {
      return createElement(MaterialDesign['MdApi'])
    }
    return mdIcon
  }
  return <IconView>{icon(id)}</IconView>
}

export default Icon
