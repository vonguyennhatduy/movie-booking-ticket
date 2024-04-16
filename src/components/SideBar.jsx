// rafc

import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { PATH } from '../constants/config'
import './sidebar.scss'

export const SideBar = () => {
    return (
        <div className="d-flex flex-column gap-3 Sidebar">
            {/* <div>Home</div> */}
            <NavLink to={PATH.home}>Home</NavLink>
            <NavLink to={PATH.bindingdata}>Binding Data</NavLink>
            <NavLink to={PATH.renderwithcondition}>Render with condition</NavLink>
            <NavLink to={PATH.handlevent}>Handle Event</NavLink>
            <NavLink to={PATH.renderwithmap}>Render With Map</NavLink>
            <NavLink to={PATH.stylecomponent}>Style Component</NavLink>
            <NavLink to={PATH.btmovie}>BT Movie</NavLink>
            <NavLink to={PATH.demostate}>Demo State</NavLink>
            <NavLink to={PATH.demoprops}>Demo Props</NavLink>
            <NavLink to={PATH.btshoeshop}>BT Shoe Shop</NavLink>
            <NavLink end to={PATH.redux.home}>
                Demo redux
            </NavLink>
            <NavLink to={PATH.redux.btphone}>BT Phone</NavLink>
            <NavLink to={PATH.redux.btxucxac}>BT Xúc Xắc</NavLink>
            <NavLink to={PATH.btForm}>BT Form</NavLink>
            <NavLink to={PATH.demoUseEffect}>Demo UseEffect</NavLink>
            <NavLink to={PATH.demoSomeHooks}>Demo Some Hooks</NavLink>
        </div>
    )
}
