import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialState from './components/emptyState/SearchStart';
import HeaderContainer from './components/header/HeaderContainer';
import BodyContainer from './components/body/BodyContainer';
import PaginationContainer from './components/pagination/PaginationContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<InitialState />} />
          <Route path='/Users' element={<BodyContainer />} />
        </Routes>
        <PaginationContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
