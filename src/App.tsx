//import React from "react";
import "./assets/styles/global.scss"
import 'antd/dist/antd.min.css'; //自动引入
//import 'antd/dist/antd.css'; //全局引用，全部组件的样式都引入了，采用自动引入后则不需要手动引用css文件
import { useRoutes} from "react-router-dom"
import router from "./router"
//import { useState } from 'react'
function App() {
  //const[count,setCount] = useState(0)
const outlet =  useRoutes(router)  //hook形式的对象
  return (

      <div  className='App'>
      {outlet}
      </div>
    
  
  )
}

export default App
