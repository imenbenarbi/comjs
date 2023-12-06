import './App.css';
import Name from "./Name";
import Discription from "./Discription";
import Price from "./Price";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
  var firstName="imen";
  return (
    <div className="App">
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Name/>
    <Discription/>
    <Price/>
   {fristName? <p>{`hello ${firstName}`}</p>:<p>hello there</p>}
    </div>
  );
}

export default App;
