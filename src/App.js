/*import ClassComponent from './ClassComponent'
import StateExample from './StateExample'
import PropsExample from './PropsExample'
import FuncProps from './FuncProps'
import Demo from './Demo'
import Events from './Events'
import JSX from './JSX'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound'
function App(){
  return(
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    {/*<StateExample/>
    <Events/>
    <JSX/>
    
    <Demo name="lucky"/>
    
    <FuncProps carname="rolls royce" year='1995'/>
    <h1>hello</h1>*/}
    

    {/*<section>
    <PropsExample name="ganesh" age="20"/>
    <PropsExample name="lucky" age="19"/>
    <p>Good Afternoon</p>
    <h1>Heading Tag</h1>
    <ClassComponent/>
    <img src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=2000" alt="nature" width="25%"/>}
    </section>*/}
    </div>
    )
}
export default App

