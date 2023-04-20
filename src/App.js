import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Skills from "./components/skill";
import Education from "./components/education";
import Experience from "./components/experience";
import Contact from "./components/contact";
import data from "./components/data/cvData.json";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header></header>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home data={data}/>} />
            <Route path="/about" element={<About data={data}/>} />
            <Route path="/skills" element={<Skills data={data} />} />
            <Route path="/education" element={<Education data={data} />} />
            <Route path="/experience" element={<Experience data={data} />} />
            <Route path="/contact" element={<Contact data={data} />} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
