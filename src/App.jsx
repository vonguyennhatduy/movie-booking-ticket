import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DemoFunctionComponent } from './DemoComponent/DemoFunctionComponent'
import DemoClassComponent from './DemoComponent/DemoClassComponent'
import { HomeComponent } from './BTComponent/HomeComponent'
import { BindingData } from './BindingData/BindingData'
import { RenderWithCondition } from './RenderWithCondition/RenderWithCondition'
import { HandleEvent } from './HandleEvent/HandleEvent'
import { RenderWithMap } from './RenderWithMap/RenderWithMap'
import { StyleComponent } from './StyleComponent/StyleComponent'
import { BTMapMovie } from './BTMapMovie/BTMapMovie'
import { DemoState } from './DemoState/DemoState'
import { DemoProps } from './DemoProps/DemoProps'
import { BTShoeShop } from './BTShoeShop/BTShoeShop'
import { DemoRedux } from './DemoRedux/DemoRedux'
import { BTPhoneRedux } from './BTPhoneRedux/BTPhoneRedux'
import { BTXucXac } from './BTXucXac/BTXucXac'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { PATH } from './constants/config'
import { MainLayout } from './layouts/MainLayout'
import { MovieDetail } from './BTMapMovie/MovieDetail'
import { BTForm } from './BTForm/BTForm'
import { DemoUseEffect } from './DemoUseEffect/DemoUseEffect'
import { DemoHooksReact } from './DemoHooksReact/DemoHooksReact'
import { BTBookingMovie } from './BTBookingMovie/BTBookingMovie'

// 2 loại component
// class component (stateful): life cycle

// function component (stateless): hooks
// hooks: về bản chất 1 function - đặt tên: use_

// JSX: javascript XML => cho phép viết cú pháp HTML ở trong javascript
// atribute của thẻ sẽ đc viết theo quy tắc camelCase
// class => className

// 1 component chỉ đc phép return về 1 thẻ JSX duy nhất

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <BTBookingMovie/>
        </div>
    )
}

export default App
