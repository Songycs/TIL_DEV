import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import EmptyPage from "./components/EmptyPage";
import CreateWord from "./components/CreateWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:day" element={<Day/>}/>
          <Route path="/create_word" element={<CreateWord/>}/>
          <Route element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App;
