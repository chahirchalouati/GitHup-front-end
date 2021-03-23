import React from 'react';
import { Provider } from 'react-redux';
import RouteWrapper from '../Routes/RouteWrapper';
import { store } from "../application";
import NavBar from '../Components/Navs/NavBar';
function App() {
  return (

    <Provider store={store}>
      <NavBar />
      <RouteWrapper />
    </Provider>

  )
}

export default App
