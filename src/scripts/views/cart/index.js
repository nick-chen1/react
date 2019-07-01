import "./index.scss"
import { connect } from "react-redux"
import { getlovelist, updataisLogin, inserZan, getlistByGrayfont, getFouList } from "../../actions"
import { Button } from "antd-mobile"
import { Link } from "react-router-dom"

@connect(
    state => {
        return {
            ...state.data
        }
    }
)
export class Cart extends Component {

    componentWillMount() {
        this.props.dispatch(getlovelist({
            url: '/react/getlovelist',
            params: {
                username: localStorage.getItem("username"),
            },
            cb() { }
        }))
        this.props.dispatch(getFouList({
            url: '/react/getfolist',
            params: {
                username: localStorage.getItem("username")
            },
            cb() { },
        }))
    }

    goLogin = () => {
        this.props.history.push("/login");
    }
    goHome = () => {
        this.props.history.push("/home");
    }

    zan = (zan, _id) => {
        const { dispatch } = this.props;
        var zan = zan + 1 * 1;
        dispatch(inserZan({
            url: '/react/inserzan',
            params: {
                num: zan,
                _id: _id
            },
            cb() { }
        }))
        this.props.dispatch(getlovelist({
            url: '/react/getlovelist',
            params: {
                username: localStorage.getItem("username"),
            },
            cb() { }
        }))
    }

    render() {
        const { isLogin, lovelist } = this.props;
        if (localStorage.getItem("username")) {
            this.props.dispatch(updataisLogin(true))
        } else {
            this.props.dispatch(updataisLogin(false))
        }
        console.log(this.props)
        // for (var i in lovelist){
        //     var 
        // }
        return (
            <div>
                <div>
                    <Button onClick={this.goLogin} type="primary" style={{ width: '90%', display: isLogin ? "none" : "block", marginLeft: '0.35rem', marginTop: '4rem' }} >还未登录，点击此处快速登录</Button>
                </div>

                <div style={{ position: 'fixed', top: '0', right: '0', left: '0', zIndex: '5', backgroundColor: 'white' }}>
                    <h2 style={{ lineHeight: '36px', width: '100%', textAlign: 'center', fontSize: '17px' }}>收藏</h2>
                </div>
                <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                        
                    {
                        this.props.lovelist.map((item, i) => {
                            return (
                                <ul key={i}>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <div style={{ marginBottom: '0.3rem', width: '100%', height: '1.2rem' }}>
                                            <img src={item.food.grayfontImg} alt="" style={{ float: 'left', borderRadius: '50%' }} />
                                            <h2 style={{ marginTop: '0.35rem', marginLeft: '0.3rem', float: 'left', color: 'black' }}>{item.food.grayfont}</h2>
                                            <h2 style={{ padding: '0.4rem 0', marginLeft: '0.5rem', color: 'red', fontSize: '18px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis', width: '70%' }}>{item.food.title}</h2>
                                        </div>
                                        <Link to={"/food/detail/" + item.food._id} key={i}>
                                            <div style={{ width: '100%' }}>
                                                <img src={item.food.image} alt="" style={{ width: '100%' }} />
                                            </div>
                                            <div>
                                                <h2 style={{ width: '90%', color: 'black', fontSize: '16px', marginLeft: '0.3rem' }}>{item.food.tel}</h2>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}