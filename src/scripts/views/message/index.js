

import "./index.scss"

import { Head } from "../../component/head"

export class Message extends Component {
    fanhui = () => {
        window.history.back(-1);
    }
    render() {
        return (
            <div>
                <i className="icon iconfont icon-fanhui" style={{ float: 'left', marginTop: '13px', marginLeft: '5px' }} onClick={this.fanhui}></i>
                <h2 style={{ lineHeight: '36px', width: '100%', textAlign: 'center', fontSize: '17px' }}>消息</h2>
                <ul style={{height:'56px',borderBottom:'1px solid #eaeaea'}}>
                    <li style={{ width: '20%', height: '1.0rem', backgroundColor: '#99E2F3', float: 'left', marginLeft: '16px', borderRadius: '13px' }}>
                        <div style={{marginLeft:'28px',marginTop:'12px'}}>
                            <i className="icon iconfont icon-wan" style={{ width: '20px', height: '20px' }} ></i>
                            <h2 style={{marginLeft:'-10px'}}>被跟做</h2>
                        </div>
                    </li>
                    <li style={{ width: '20%', height: '1.0rem', backgroundColor: '#ff4a49', float: 'left', marginLeft: '16px', borderRadius: '13px' }}>
                        <div style={{marginLeft:'28px',marginTop:'12px'}}>
                            <i className="icon iconfont icon-star"></i>
                            <h2 style={{marginLeft:'-15px'}}>赞于收藏</h2>
                        </div>
                    </li>
                    <li style={{ width: '20%', height: '1.0rem', backgroundColor: '#84e5c8', float: 'left', marginLeft: '16px', borderRadius: '13px' }}>
                        <div style={{marginLeft:'28px',marginTop:'12px'}}>
                            <i className="icon iconfont icon-xinxi-copy"></i>
                            <h2 style={{marginLeft:'-15px'}}>评论和@</h2>
                        </div>
                    </li>
                    <li style={{ width: '20%', height: '1.0rem', backgroundColor: '#ffc54d', float: 'left', marginLeft: '16px', borderRadius: '13px' }}>
                        <div style={{marginLeft:'28px',marginTop:'12px'}}>
                            <i className="icon iconfont icon-ren"></i>
                            <h2 style={{marginLeft:'-15px'}}>新增粉丝</h2>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}