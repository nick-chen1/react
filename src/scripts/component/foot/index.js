

export const foots =  [
    {txt:"下厨房",path:"/app/home",name:"home",icon:"icon-home",on:"home-on.png",off:"home-off.png"},
    {txt:"分类",path:"/app/classify",name:"classify",icon:"icon-leimupinleifenleileibie--"},
    {txt:"收藏",path:"/app/cart",name:"cart",icon:"icon-star"},
    {txt:"我",path:"/app/my",name:"my",icon:"icon-renwu"}
]

import "./index.scss"
import  {Link,NavLink} from "react-router-dom"
import {Badge} from "antd-mobile"

export const Foot = ()=>{
    return (
       <footer>
           {
               foots.map((item,i)=>{
                   return (
                       <div key={i}>
                           <NavLink to={item.path} activeClassName="nav-active" > 
                                <i className={"iconfont icon " + item.icon} ></i>
                                <span> {item.txt}</span>
                                {i==2&&<Badge className="hot" text={8} style={{ marginLeft: 12 }}></Badge>}
                           </NavLink>
                       </div>
                   )
               })
           }
       </footer>
    )
}