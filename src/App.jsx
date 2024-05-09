import './App.css';
import elephant from "./images/elephant.jpeg";
import DataComponent from './components/DataComponent'; 

function App() {
  // code here
  const data = DataComponent();
  return (
    <div className='Home'>
      <h1 className='head'>Kalvium Gallery</h1>
      <div className='container-image'>
        {data.map(item => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} className = 'image' />
        ))}
      </div>
    </div>
  )
}

export default App;
