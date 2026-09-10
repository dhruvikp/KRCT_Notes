import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
 
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>

          <NavLink 
          to = "/"
          className={({isActive}) => isActive ? classes.active : undefined}
          >
            Dashboard
          </NavLink>

         <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            About
          </NavLink>

        
        
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
