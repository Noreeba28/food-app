import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartbutton';
const mealsImage = 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';


const Header = props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
};

export default Header;