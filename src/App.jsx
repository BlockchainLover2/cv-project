import './App.css'
import GeneralInformation from "./components/General-Information.jsx"
import SchoolInformation from "./components/School-Information.jsx";
import WorkInformation from "./components/Work-Information.jsx";

function App() {

  return (
    <>
        <div className="main-container">
            <GeneralInformation/>
            <SchoolInformation/>
            <WorkInformation/>
        </div>

    </>
  )
}

export default App
