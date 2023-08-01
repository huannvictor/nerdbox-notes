// import SidebarMenu from '../sidebarMenu'

export default function Notes(props: {
  isOpen: boolean
  setIsOpen: (arg0: boolean) => void
}) {
  // console.log('notes comp', isOpen)
  return (
    <>
      {/* <SidebarMenu isOpen={props.isOpen} setIsOpen={props.setIsOpen} /> */}
      <div className="notes-editor" id="notes-editor">
        Editor
      </div>
    </>
  )
}
