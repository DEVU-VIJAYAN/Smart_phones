import logo from './logo.svg';
import './App.css';
import AddPhone from './component/AddPhone';
import SearchPhone from './component/SearchPhone';
import DeletePhone from './component/DeletePhone';
import AddNav from './component/AddNav';
import ViewPhone from './component/ViewPhone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPhone/>}/>
      <Route path="/SearchPhone" element={<SearchPhone/>}/>
      <Route path="/ViewPhone" element={<ViewPhone/>}/>
      <Route path="/DeletePhone" element={<DeletePhone/>}/>
  
    </Routes>
    
    </BrowserRouter>
   


  );
}

export default App;
