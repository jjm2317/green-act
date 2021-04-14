import React from 'react';
import './RecyclePage.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from '../../containers/auth/LoginForm';
import GeneralWaste from './GeneralWaste';
import FoodWaste from './FoodWaste';
import PlasticBags from './PlasticBags';
import PaperWaste from './PaperWaste';
import StyrofoamTrash from './StyrofoamTrash';
import GeneralWasteImage from "../../images/recycleMenu_generalWaste.png"
import GlassTrashImage from "../../images/recycleMenu_Bottle.png"
import CannedGarbageImage from "../../images/recycleMenu_Can.png"
import PlasticWasteImage from "../../images/recycleMenu_Plastic.png"
import PlasticBagsImage from "../../images/recycleMenu_Vinyl.png"
import StyrofoamTrashImage from "../../images/recycleMenu_Styrofoam.png"
import PaperWasteImage from "../../images/recycleMenu_Paper.png"
import FoodWasteImage from "../../images/recycleMenu_Food.png"
import SignUp from '../SignUp/SignUp';
import Bestboard from '../Main/Bestboard';

const RecyclePage = () => {
  return(
    <section className = "RecyclePage">
      <ul className= "menu-list">
        <li className= "menu-item">
        <Link to="/recycle/GeneralWaste">
        <img src={GeneralWasteImage} alt="generalWaste"/>
        </Link>
        </li>

        <li className= "menu-item">
        <Link to="/recycle/GlassTrash">
          <img src={GlassTrashImage} alt="glassTrash"/>
        </Link>
        </li>

        <li className= "menu-item">
        <Link to="/recycle/CannedGarbage">
          <img src={CannedGarbageImage} alt="cannedGarbage"/>
        </Link>
        </li>

        <li className= "menu-item">
        <Link to="/recycle/PlasticWaste">
          <img src={PlasticWasteImage} alt="plasticWaste"/>
        </Link>
        </li>

        <li className= "menu-item">
          <Link to="/recycle/PlasticBags">
            <img src={PlasticBagsImage} alt="plasticBags"/>
          </Link>
        </li>

        <li className= "menu-item">
          <Link to="/recycle/PaperWaste">
            <img src={PaperWasteImage} alt="paperWaste"/>
          </Link>
        </li>

        <li className= "menu-item">
          <Link to="/recycle/StyrofoamTrash">
            <img src={StyrofoamTrashImage} alt="styrofoamTrash"/>
          </Link>
        </li>

        <li className= "menu-item">
          <Link to="/recycle/FoodWaste">
            <img src={FoodWasteImage} alt="foodWaste"/>
          </Link>
        </li>

      </ul>

      <div className= "description">
          <Route exact path="/recycle/GeneralWaste" component={GeneralWaste} />
          <Route path="/recycle/FoodWaste" component={FoodWaste} />
          <Route path="/recycle/PaperWaste" component={PaperWaste} />
          <Route path="/recycle/StyrofoamTrash" component={StyrofoamTrash} />
          <Route path="/recycle/PlasticBags" component={PlasticBags} />
      </div>

    </section>

  );
};

export default RecyclePage