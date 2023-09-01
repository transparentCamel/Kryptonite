import { GlobalStyles } from './globalStyles/GlobalStyles';
import { MainPage } from './screens/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
