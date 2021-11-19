import './App.css';
import { Status } from './components/Status';
import {Heading} from './components/Heading';
import {Oscar} from './components/Oscar';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Conatiner';
import { Box } from './components/context/Box'
import {ThemeContextProvider} from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Private isLoggedIn={true} Component={Profile}/>
      <List
        items={[
          {
            id:1,
            first:"computer"
          },
          {
            id:2,
            first:"mouse"
          },
          {
            id:3,
            first:"keyboard"
          },
        ]}
        onClick={(item)=>console.log(item)}
      />
    </div>
  );
}

export default App;
