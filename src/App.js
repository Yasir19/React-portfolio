import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feader from "./components/Feader";
import Nav from "./components/Nav";


function App() {
  const [screens] = useState([
    {
      name:"about me"
    },
    {
      name:'project'
    },
    {
      name:'contact me'
    },
    {
      name: 'resume'
    }
  ]);
  const [currentScreen, setCurrentScreen] = useState(screens[0])

  return (
    <div>
      <Header>
        <Nav
        screens={screens}
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}
        ></Nav>

      </Header>
      <main>
        <Feader currentScreen={currentScreen}></Feader>
      
      </main>
      <Footer />
   
    </div>
   
  );
}

export default App;
