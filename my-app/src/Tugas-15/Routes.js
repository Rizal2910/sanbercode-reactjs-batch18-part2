import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tugas9 from "../Tugas-9/FormBuah"
import Tugas10 from "../Tugas-10/DaftarBuah"
import Tugas11 from "../Tugas-11/Timer"
import Tugas12 from "../Tugas-12/DaftarBuah"
import Tugas13 from "../Tugas-13/DaftarBuah"
import Movie from "../Tugas-14/DaftarBuah"
import "./Routes.css"




const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/Tugas-9">Home</Link></li>
            <li><Link to="/Tugas-10">Contact</Link></li>
            <li><Link to="/Tugas-11">About</Link></li>
            <li><Link to="/Tugas-12">Profil</Link></li>
            <li><Link to="/Tugas-13">Kelas</Link></li>
            <li><Link to="/Tugas-14">Komunitas</Link></li>
            
          </ul>
        </nav>

        

        <Switch>
          {/* contoh route dengan component nya sebagai child */}
          {/* <Route exact path="/">
            <Movie />
          </Route> */}
          {/* contoh route dengan component nya sebagai props */}
          <Route exact path="/Tugas-9" component={Tugas9} />
          <Route exact path="/Tugas-10" component={Tugas10} />
          <Route exact path="/Tugas-11" component={Tugas11} />
          <Route exact path="/Tugas-12" component={Tugas12} />
          <Route exact path="/Tugas-13" component={Tugas13} />
          <Route exact path="/Tugas-14" component={Movie} />
            
        </Switch>
      </div>
    </Router>
  );
}

export default Routes




