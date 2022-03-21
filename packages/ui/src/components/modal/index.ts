import ModalComponent from './modal'
import Action from './action'
import Header from './header'
import Content from './content'
import { ModalProps } from './type'
interface ModalInterface {
    (props: ModalProps): JSX.Element

    Action: typeof Action
    Header: typeof Header
    Content: typeof Content
}

const Modal = ModalComponent as ModalInterface
Modal.Header = Header
Modal.Content = Content
Modal.Action = Action

export default Modal
