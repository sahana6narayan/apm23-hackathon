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
import SearchResult from './Pages/SearchResult/SearchResult.js';
import Schedules from './Pages/Schedules/Schedules.js';
import ShuttleSelection from './Pages/ShuttleSelection/ShuttleSelection.js';
import Confirmation from './Pages/Confirmation/Confirmation.js';
import LoadingPage from './Pages/LoadingPage/LoadingPage.js';
import PickupCode from './Pages/PickupCode/PickupCode.js';


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
              <Route path="/searchresult" element={<SearchResult />} />
              <Route path="/schedules" element={<Schedules />} />
              <Route path="/shuttleselection" element={<ShuttleSelection />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/loadingpage" element={<LoadingPage />} />
              <Route path="/pickupcode" element={<PickupCode />} />
            </Routes>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default App;