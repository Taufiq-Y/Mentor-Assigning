import Navbar from "./components/Navbar.js";
import { Route, Switch } from "react-router-dom";
import CreateMentor from "./components/CreateMentor.js";
import Mentors from "./components/Mentors";
import Home from "./components/Home.js";
import CreateStudent from "./components/CreateStudent";
import Students from "./components/Students";
import FindByMentor from "./components/FindByMentor.js";
import ChangeMentor from "./components/changeMentor.js";
import AssignMentors from "./components/AssignMentors.js";
// in App , Given all routes 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/students">
          <Students />
        </Route>
        <Route exact path="/mentors">
          <Mentors />
        </Route>
        <Route path="/add-mentor">
          <CreateMentor />
        </Route>
        <Route path="/add-student">
          <CreateStudent />
        </Route>
        <Route path="/assign-mentor">
          <AssignMentors />
        </Route>
        <Route path="/change-mentor">
          <ChangeMentor />
        </Route>
        <Route path="/find-by-mentor">
          <FindByMentor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
