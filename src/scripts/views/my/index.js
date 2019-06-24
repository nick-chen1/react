

import "./index.scss";
import { Head } from "~/component/head";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export class My extends Component {
    state = { isLogin: false };
    goLogin=()=>{
        const {history} =this.props;
        history.push("/login");
    }
    
    render() {
        const { isLogin } = this.state
        return (
            <div>
                <SearchBar placeholder="搜索我的菜谱" maxLength={8} />
                <div style={{ display: isLogin ? "block" : "none" }}>
                    <h2> 你的账户  ==  {13212341234}</h2>
                    <img src={require("@/assets/images/photo.png")} alt="" />
                </div>
                <Button  onClick={this.goLogin} style={{display:!isLogin?'inline-block':'none'}} type="warning" inline>马上登录</Button>
            </div>
        )
    }
}