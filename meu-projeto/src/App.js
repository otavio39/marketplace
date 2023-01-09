import logo from './logo.svg';
import './App.css';
import HellWorld from './components/HelloWorld'

function App() {
  return (
    <div className="App">
      <HellWorld nome="Kettle" valor="$45.50" desc="Black stove-top kettle" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Book" valor="$13.50" desc="Book on grid systems" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Coffee" valor="$7.50" desc="Whole bean espresso can" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Lamp" valor="$13.50" desc="Wooden table lamp" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Headphones" valor="$13.50" desc="Seafoam wireless" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Backpack" valor="$13.50" desc="Black roll-top backpack" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Keyboard" valor="$13.50" desc="Black magic keyboard" foto="https://via.placeholder.com/348" alt="Imagem"/>
      <HellWorld nome="Mouse" valor="$13.50" desc="Black magic mouse" foto="https://via.placeholder.com/348" alt="Imagem"/>
    </div>
  );
}

export default App;
