import "./index.scss"
// import {Head} from "@/scripts/component/head"
import { Head } from "../../component/head"
import { List, InputItem, Button } from 'antd-mobile';
import axios from "@/utils/axios"

export const mobileReg = /^1(3|5|7|8|9)\d{9}$/
export const codeReg = /^\d{4}$/

let timer = null;

export class Login extends Component {
    state = {
        toggle:true,
        mobileDis:true,
        flag:true,
        count:60,
        txt:"获取验证码"
    }
    checkMobile = (mobile) => {
        if(this.state.flag){
            this.setState({
                mobileDis:!mobileReg.test(mobile),
            })
        }
    }
    checkCode = (value) =>{
        console.log(value)
        var mobile = this.refs.mobile.state.value;
        this.setState({
            toggle:!(codeReg.test(value)&&(mobileReg.test(mobile)))
        })

    }

    startTime =()=>{
        timer = setInterval(()=>{
            if(this.state.count>0){
                this.setState({
                    // codeDis:false,
                    count:--this.state.count,
                    txt:this.state.count+"S 后继续"
                })
            }else{
                clearInterval(timer);
                timer=null;
                this.setState({
                    txt:"获取验证码",
                    count:60,
                    mobileDis:false,
                    flag:true
                })
            }
        },1000)
    }

    getCode=()=>{
        axios.post("/react/sendCode",{
            mobile:this.refs.mobile.state.value
        }).then(res=>{
            console.log(res);
        })

        this.setState({
            mobileDis:true,
            flag:false
        })
        this.startTime();
    }

    autoLogin = ()=>{
        let mobile = this.refs.mobile.state.value;
        let code = this.refs.code.state.value;

        axios.post("/react/testCode",{
            mobile,code
        }).then(res=>{
            if(res.data.code==200){
                this.props.history.push("/app/my")
            }
        })

    }

    render() {
        const { toggle, mobileDis ,txt} = this.state;
        return (
            <div>
                <Head title="登录" show={true}></Head>
                <List>
                    <InputItem
                        placeholder="请输入手机号"
                        clear
                        moneyKeyboardAlign="left"
                        onChange={this.checkMobile}
                        ref="mobile"
                    >手机号</InputItem>
                    <InputItem
                        placeholder="请输入六位数验证码"
                        clear
                        moneyKeyboardAlign="left"
                        ref="code"
                        onChange={this.checkCode}
                    >验证码</InputItem>
                    <Button type="warning" ref="btn" className="l-btn" onClick={this.getCode} disabled={mobileDis}>{txt}</Button>
                    <Button type="primary" disabled={toggle} onClick={this.autoLogin}>立即登陆</Button>

                </List>
            </div>
        )
    }
}