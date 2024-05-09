import React, { lazy } from "react" //路由懒加载
import Home from "../Views/Home"
import { Navigate } from "react-router-dom"//重定向组件
// import About from "../Views/About"
// import User from "../Views/User"
const About = lazy(() => import("../Views/About"))
const User = lazy(() => import("../Views/User")) //lazy loading配合使用
const Page1 = lazy(() => import("../Views/Page1"))
const Page2 = lazy(() => import("../Views/Page2"))
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" /> //重定向
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            }
        ]
    }
    // {
    //     path:"/home",
    //     element:<Home />
    // },
    // {
    //     path:"/about",
    //     element:withLoadingComponent (<About/>)
    // },
    // {
    //     path:"/user",
    //     element:withLoadingComponent (<User/>)
    // }
]
export default routes