import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
            <nav>
                <ul className={styles.listStyle}>
                    <li><NavLink to="/" className={({isActive}) =>
                        isActive ? styles.active : styles.linkStyle}>Rockets</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/missions" className={({isActive}) =>
                        isActive ? styles.active : styles.linkStyle}>Missions</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/profile" className={({isActive}) =>
                        isActive ? styles.active : styles.linkStyle}>My Profile</NavLink></li>
                </ul>
            </nav>
    )
}

export default Navigation;