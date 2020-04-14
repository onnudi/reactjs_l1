import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css';


const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" >Burger Builder</NavigationItem>
    <NavigationItem link="/checkout" >Checkout</NavigationItem>
    <NavigationItem link="/order" >Order</NavigationItem>
  </ul>
);

export default NavigationItems;
