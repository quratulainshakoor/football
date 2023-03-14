

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componients/Layout/layout";
import Header from "./componients/Navbar/Navbar";

import Detail from "./screens/detail";
import Error from "./screens/Error";
import Matches from "./screens/Match/Matches";

import Player from "./screens/Players/player";
import Setup from "./screens/Setup/setup";

import Team from "./screens/Teams/Team";


function App() {
  return (
  <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Player/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/match" element={<Matches />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/detail" element={<Detail />} />
            
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

  
</>
  );
}

export default App;
