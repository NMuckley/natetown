import logo from './logo.svg';
import './App.css';
import Title from './Title'
import ContactInfo from './ContactInfo'

const App = () => {
  const names = ["nate", "santiago", "sarah"]

  return (
    <div className="App">
      <Title/>
      {names.map( name => {
        return <ContactInfo name={name}/>
      })}
    </div>
  );
}

export default App;
