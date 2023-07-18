import AddForm from "./components/AddForm";
import Bookcontainer from "./components/Books/Bookcontainer";
import Container from "./components/Container";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddForm />
        <Bookcontainer/>
      </Container>
    </div>
  );
}

export default App;
