import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
function App() {
  return (
      <MantineProvider>
          <div>
              <Navbar></Navbar>
              <Home></Home>
              <About></About>
              <Skills></Skills>
              <Projects></Projects>
              <Contact></Contact>
          </div>
      </MantineProvider>


);
}

export default App;
