import Hello from "./Hello";
function Header({name}) {
  return (
    <>
    <Hello />
    <p>This is the main {name}.</p>
    </>
  )
}
export default Header;
