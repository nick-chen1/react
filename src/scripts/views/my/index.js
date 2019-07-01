

import "./index.scss";
import { Button, Drawer, List, NavBar, Icon } from 'antd-mobile';

export class My extends Component {

    state = {
        isLogin: false,
        open: false,
        username: localStorage.getItem("username"),
        time: localStorage.getItem("time")
    };
    goLogin = () => {
        const { history } = this.props;
        history.push("/login");
    }

    onOpenChange = () => {
        // console.log("xxxx");
        this.setState({ open: !this.state.open });
    }
    tuichu = () => {
        // console.log("xxxxx")
        localStorage.removeItem('username');
        localStorage.removeItem('pathname');
        localStorage.removeItem('pcount');
        localStorage.removeItem('time');

        this.setState({
            open: false,
            isLogin: false
        })
    }

    componentWillMount() {
        var username = localStorage.getItem("username");
        if (username) {
            this.setState({
                isLogin: true
            })
        }
    }

    render() {
        const { isLogin, username, time } = this.state
        const sidebar = (<List>
            {[0].map((i, index) => {
                if (index === 0) {
                    return (
                        <div style={{}}>
                            <h2 style={{ marginTop: '0.5rem', fontSize: '18px' }} onClick={this.tuichu}>退出登录</h2>
                        </div>
                    )
                }
            })}
        </List>);
        return (
            <div>
                <div>
                    <i className="icon iconfont icon-set" style={{ float: 'left', padding: '0.3rem' }} onClick={this.onOpenChange}></i>
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >

                        <div style={{ width: '100%', height: '0.8rem', marginTop: '1.3rem', display: isLogin ? 'block' : 'none' }}>
                            <h2 style={{ fontSize: '26px' }}>{username}</h2>
                            <h2 style={{ padding: '0.2rem 0' }}>{time}加入</h2>
                            <h2 style={{ padding: '0.2rem 0' }}>添加个人简历，让厨友更了解你</h2>
                            <div style={{ marginTop: '0.2rem' ,borderBottom:'1px solid #EAEAEA',width:'100%',height:'0.8rem' }}>
                                <div style={{ float: 'left', marginRight: '0.1rem' }}>
                                    <h2>0</h2>
                                    <h2>关注</h2>
                                </div>
                                <div style={{ float: 'left'}}>
                                    <h2>0</h2>
                                    <h2>粉丝</h2>
                                </div>
                                <div style={{float:'right',marginRight:'0.4rem',marginTop:'0.15rem',width:'1.5rem',border:'1px solid red',borderRadius:'6%',}}>
                                    <h2 style={{textAlign:'center',color:'red',padding:'0.1rem 0'}}>编辑资料</h2>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: isLogin ? 'none' : 'block' }}>
                            <div style={{ width: '100%', height: '4rem' }}>

                            </div>
                            <div>
                                <h2 style={{ padding: '0.6rem 0', fontSize: '26px', width: '100%', textAlign: 'center' }}>开始准备好好吃饭</h2>
                            </div>
                            <div>
                                <h2 style={{ textAlign: 'center', width: '90%', marginBottom: '0.5rem' }}>好好吃饭用心生活，比什么都幸福，保存你最喜欢的美食,分享你的三餐,关注厨房里的达人。</h2>
                            </div>
                            <Button onClick={this.goLogin} type="primary" style={{ width: '90%' }} >手机号快速登录</Button>
                        </div>
                    </Drawer>
                </div>
                {/* <div style={{ display: isLogin ? "block" : "none" }}>
                    <h2> 你的账户  ==  {13212341234}</h2>
                    <img src={require("@/assets/images/photo.png")} alt="" />
                </div> */}

            </div>
        )
    }
}