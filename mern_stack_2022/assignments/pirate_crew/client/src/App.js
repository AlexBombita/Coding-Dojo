import Main from './views/Main';
import Detail from './views/Detail';
import Form from './components/Form';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROOT ROUTE FOR MAIN */}
          <Route path="/" element={<Main />} />

          {/* ROUTE FOR DETAILS*/}
          <Route path="/:product_id" element={<Detail />} />

          {/* ROUTE FOR EDIT PAGE */}
          <Route path='/:product_id/edit' element={<Edit />} />

          <Route path='/new' element={<Form />} />


        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
