
import "./App.css";
import CustomStepper from "./components/CustomStepper";
import HomePage from "./components/HomePage";
import EmployerJobPost from "./Dashboard/EmployerJobPost";




function App() {
  return (
    <div className="App">
      {/* <Navbaar/>  */}
      <HomePage/>
    
     <CustomStepper/>
   <EmployerJobPost/> 
    
    </div>
  );
}

export default App;
