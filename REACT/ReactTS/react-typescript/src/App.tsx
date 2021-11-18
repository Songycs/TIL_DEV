import './App.css';
import { Status } from './components/Status';
import {Heading} from './components/Heading';
import {Oscar} from './components/Oscar';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Conatiner';
function App() {

  return (
    <div className="App">
      <Status status={'success'}/>
      <Oscar>
        <Heading>PlaceHolder text</Heading>
      </Oscar>
      <Greet name="Song" isLoggedIn={false}/>
      <Button handleClick={(event,id)=>{
        console.log('button click',event,id);
      }}/>
      <Input value="" handleChange={(event)=>console.log(event)} />
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
    </div>
  );
}

export default App;
