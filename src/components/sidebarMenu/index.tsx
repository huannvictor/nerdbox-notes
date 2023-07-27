import { push as Menu } from 'react-burger-menu'

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
        <div>Search</div>
        <div>
          <p>List</p>
        </div>
      </Menu>
    </>
  )
}

export default SidebarMenu
