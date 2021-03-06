import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDraw from '../SideDraw/ToggleSideDraw/ToggleSideDraw';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <ToggleSideDraw clicked={props.toggle}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.DesktopOnly}>
      <NavigationItems />
    </div>
  </header>

)

export default Toolbar;