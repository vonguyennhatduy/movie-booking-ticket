//rafc
import React from 'react'
import { HeaderComponent } from './HeaderComponent'
import { NavigationComponent } from './NavigationComponent'
import { ContentComponent } from './ContentComponent'
import { FooterComponent } from './FooterComponent'
import { SideBar } from '../components/SideBar'

export const HomeComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <SideBar />
                </div>
                <div className="col-10">
                    <HeaderComponent />
                    <div className="row">
                        <div className="col-4 pe-0">
                            <NavigationComponent />
                        </div>
                        <div className="col-8 ps-0">
                            <ContentComponent />
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </div>
    )
}
