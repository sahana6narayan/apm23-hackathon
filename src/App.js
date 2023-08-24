import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import all pages
import Home from './Pages/Home/Home.js';
import EventList from './Pages/EventList/EventList.js';

const engine = new Styletron();

function App() {
  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/eventlist" element={<EventList />} />
            </Routes>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default App;
