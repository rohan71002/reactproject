import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(){
    return(
        <>
        <h1 style={{color:'aqua', backgroundColor:'blue'}}>Hello World!!</h1>
        <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Ecommerce'><li>Ecommerce</li></Link>
        <Link to='/Api'><li>Api</li></Link>
        <Link to='/Counter'><li>Counter</li></Link>
        </ul>
        </>
    );
}
export default Nav;