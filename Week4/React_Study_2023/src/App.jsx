import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
                  <Route path={'/'} element={<MainPage />}/>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
