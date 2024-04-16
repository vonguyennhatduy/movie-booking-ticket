// rafc
import React from 'react'
import { SideBar } from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div className="MainLayout container">
            <div className="row">
                <div className="col-2">
                    <SideBar />
                </div>
                <div className="col-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
