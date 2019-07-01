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
        toggle: false,
        mobileDis: false,
        flag: true,
        count: 60,
        txt: "",
        // time: new Date().getTime()
    }
    checkMobile = () => {
        // console.log(this.refs.mobile.value)

        if (this.state.flag) {
            this.setState({
                mobileDis: mobileReg.test(this.refs.mobile.value),
            })
        }
    }
    checkCode = () => {
        // console.log(this.refs.code.value)
        var mobile = this.refs.mobile.value;
        // console.log(mobile)
        this.setState({
            toggle: (codeReg.test(this.refs.code.value) && (mobileReg.test(mobile)))
        })

    }
    // huoqu = () => {
    //     if (this.state.mobileDis == true) {
    //         console.log("xxxxx")
    //     }
    // }


    startTime = () => {
        timer = setInterval(() => {
            if (this.state.count > 0) {
                this.setState({
                    // codeDis:false,
                    count: --this.state.count,
                    txt: this.state.count + "S 后继续"
                })
            } else {
                clearInterval(timer);
                timer = null;
                this.setState({
                    txt: "",
                    count: 60,
                    mobileDis: true,
                    flag: true
                })
            }
        }, 1000)
    }

    getCode = () => {
        if (this.state.mobileDis == true) {
            axios.post("/react/sendCode", {
                mobile: this.refs.mobile.value
            }).then(res => {
                // console.log(res);
            })
            this.setState({
                mobileDis: false,
                flag: false
            })
            this.startTime();
        }
    }


    autoLogin = () => {
        let mobile = this.refs.mobile.value;
        let code = this.refs.code.value;
        var time =new Date().getFullYear()+"-"+ (new Date().getMonth()+1*1)+"-"+new Date().getDate();
        // console.log(time)
        axios.post("/react/testCode", {
            mobile, code
        }).then(res => {
            if (res.data.code == 200) {
                localStorage.setItem("username", mobile + "用户");
                localStorage.setItem("time",time)
                localStorage.getItem("pathname")?this.props.history.push(localStorage.getItem("pathname")): this.props.history.push("/app/my");
                // this.props.history.push("/app/my")
            }
        })

    }

    fanhui = () => {
        window.history.back(-1);
    }
    render() {
        const { toggle, mobileDis, txt } = this.state;
        // console.log(this.props);
        return (
            <div>
                <div style={{ borderBottom: '1px solid #EAEAEA' }}>
                    <h2 style={{ float: 'left', padding: '0.3rem', fontSize: '16px', color: 'red' }} onClick={this.fanhui}>取消</h2>
                    <h2 style={{ width: '85%', textAlign: 'center', height: '1rem', lineHeight: '1rem', fontSize: '16px' }}>手机登录注册</h2>
                </div>
                {/* <InputItem
                    placeholder="请输入手机号"
                    clear
                    moneyKeyboardAlign="left"
                 
                  
                >手机号</InputItem> */}
                <div style={{ height: '0.9rem', backgroundColor: 'white' }}>
                    <span style={{ float: 'left', fontSize: '17px', padding: '0.2rem 0', marginLeft: '0.3rem' }}>手机号</span>
                    <input style={{ display: 'block', width: '72%', marginTop: '0.1rem', float: 'right', height: '0.6rem', border: 'none' }} onChange={this.checkMobile} ref="mobile" type="text" placeholder="请输入手机号" />
                </div>
                <div style={{ height: '0.9rem', backgroundColor: 'white' }}>
                    <span style={{ float: 'left', fontSize: '17px', padding: '0.3rem 0', marginLeft: '0.3rem' }}>验证码</span>
                    <input style={{ display: 'block', width: '44%', marginTop: '0.2rem', float: 'left', height: '0.5rem', border: 'none', marginLeft: '0.8rem' }} type="text" ref="code"
                        onChange={this.checkCode} placeholder="请输入六位数验证码" />
                    <span style={{ float: 'left', fontSize: '17px', padding: '0.3rem 0', marginLeft: '0.3rem', display: mobileDis ? 'none' : 'block' }}>{txt}</span>
                </div>
                <div>
                    <h2 style={{ width: '100%', textAlign: 'center', fontSize: '12px', padding: '0.2rem 0' }}>登录注册即代表你同意<span style={{ color: 'red' }}>《下厨房注册使用协议》</span></h2>
                    <div style={{ width: '90%', height: '0.6rem', marginLeft: '0.3rem' }}>
                        <h2 style={{ width: '100%', textAlign: 'center', lineHeight: '0.6rem', color: "white", fontSize: '15px', backgroundColor: mobileDis ? 'red' : 'black', }} onClick={this.getCode}>收取验证码</h2>
                        <div style={{ width: '100%', height: '0.2rem' }}>
                        </div>
                        <h2 style={{ width: '100%', textAlign: 'center', lineHeight: '0.6rem', color: "white", fontSize: '15px', backgroundColor: toggle ? 'red' : 'black' }} onClick={this.autoLogin}>立即登录</h2>

                    </div>
                </div>

                {/* <List>
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
                </List> */}
            </div>
        )
    }
}