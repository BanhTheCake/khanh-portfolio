import './App.css'
import 'react-photo-view/dist/react-photo-view.css';
import Header from './components/Header'
import ProjectOne from './components/ProjectOne'
import { PhotoProvider } from 'react-photo-view';
import ProjectOne_2 from './components/ProjectOne_2' 
import ProjectTwo from './components/ProjectTwo';
import ProjectTwo_2 from './components/ProjectTwo_2';
import Information from './components/Information';
function App() {
  return (
      <div className="mx-auto">
        <Header />
         <PhotoProvider>
            <Information />
            <ProjectOne />
            <ProjectOne_2 />
            <ProjectTwo />
            <ProjectTwo_2 />
         </PhotoProvider>
      </div>
  )
}

export default App
