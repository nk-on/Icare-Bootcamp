import Hello from "./Hello";
function Header({name}:{name:string}) {
  return (
    <>
    <Hello />
    <p>This is the main {name}.</p>
    </>
  )
}
export default Header;
