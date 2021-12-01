import Home from './Pages/Home/Home'
import FurnitureCleaning from './Pages/FurnitureCleaning/FurnitureCleaning'
import HouseMaintenance from './Pages/HouseMainenance/HouseMaintenance'
import PropertyManagement from './Pages/PropertyManagement/PropertyManagement'
import About from './Pages/About/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/furniture-cleaning" exact component={FurnitureCleaning} />
          <Route path="/house-maintenance" exact component={HouseMaintenance} />
          <Route path="/property-management" exact component={PropertyManagement} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
