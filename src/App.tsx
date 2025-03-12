import './App.css'
import Header from './Header';
import List from './List';
function App() {
  const fruits = ["Apple","Strawberry","Cherry"];
  return (
    <>
     <Header name={"App component"} />
     <List items={fruits} />
    </>
  )
}

export default App
