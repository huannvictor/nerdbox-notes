import { push as Menu } from 'react-burger-menu'
import customStyle from './SidebarMenu.module.css'
import './styles.css'

const { menuItem } = customStyle

const SidebarMenu = (props: {
  isOpen: boolean
  setIsOpen: (arg0: boolean) => void
}) => {
  return (
    <>
      <Menu
        isOpen={props.isOpen}
        onStateChange={(state) => props.setIsOpen(state.isOpen)}
        disableAutoFocus
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <div className={menuItem}>
          <p>Search</p>
        </div>
        <div className={menuItem}>
          <p>List</p>
        </div>
      </Menu>
    </>
  )
}

export default SidebarMenu
