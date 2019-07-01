import "./index.scss"
// import {Head} from "@/scripts/component/head"
import { WingBlank, Carousel, Badge, Tabs, SearchBar, Toast, Button } from "antd-mobile"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getfoodlist, getFouList, updataisLogin, getlistByGrayfont, inserZan, getFoodById, inserPing, getPing } from "../../actions"


@connect(
    state => {
        return {
            ...state.data
        }
    }
)

export class Home extends Component {
    gotoMess = () => {
        const { history } = this.props;
        history.push("/message")
    }
    search = () => {
        const { history } = this.props;
        history.push("/search")
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getfoodlist({
            url: "/react/getFood",
            params: { limit: 20 },
            cb() { },
        }))
        dispatch(getFouList({
            url: '/react/getfolist',
            params: {
                username: localStorage.getItem("username")
            },
            cb() { },
        }))

        setTimeout(() => {
            this.setState({
                data: [require("@/assets/images/0c1992b977554b31b948341849b89312_1500w_1500h.jpg"), require("@/assets/images/2eb0a0a201a811e7bc9d0242ac110002_1280w_1024h.jpg"), require("@/assets/images/3575bb0acd0711e6bc9d0242ac110002_1280w_960h.jpg")],
            });
        }, 1000);
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    diandian = (index) => {
        const { dispatch } = this.props;
        if (index.title.props.children == "关注") {
            localStorage.getItem("username") ? dispatch(updataisLogin(true)) : dispatch(updataisLogin(false));
            var list = [];
            for (var i in this.props.FouList) {
                list.push(this.props.FouList[i].grayfont)
            }
            dispatch(getlistByGrayfont({
                url: '/react/getlistByGray',
                params: {
                    listByGrayfont: list
                },
                cb() { }
            }))

        }
    }
    goLogin = () => {
        this.props.history.push("/login");
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
        var list = [];
        for (var i in this.props.FouList) {
            list.push(this.props.FouList[i].grayfont)
        }
        // console.log(list)
        dispatch(getlistByGrayfont({
            url: '/react/getlistByGray',
            params: {
                listByGrayfont: list
            },
            cb() { }
        }))
    }




    render() {
        // console.log(this.props)
        const tabs = [
            { title: <Badge >关注</Badge> },
            { title: <Badge >发现</Badge> },
            { title: <Badge >故事</Badge> },
        ];
        const { isLogin, listByGrayfont, pinglun } = this.props;

        return (
            <div>
                <div style={{ width: '100%', position: 'fixed', top: '0', right: '0', left: '0', backgroundColor: '#F0F0F0', zIndex: '5' }}>
                    <WingBlank style={{ position: 'fiexd' }}>
                        <div onClick={this.search}>
                            <SearchBar placeholder="搜索菜谱,食材" style={{ marginLeft: '16px', width: '83%', float: 'right' }} />
                        </div>
                    </WingBlank>
                    <div onClick={this.gotoMess}>
                        <i className="icon iconfont icon-lingdang" style={{ float: 'left', marginTop: '14px', marginLeft: '20px' }}></i>
                    </div>
                </div>
                {/* 轮播图 */}
                <div style={{ marginTop: '0.9rem' }}>
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={`${val}`}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <Tabs style={{ width: '50%', }} tabs={tabs} onChange={this.diandian}
                    initialPage={1}
                >
                    <div style={{ backgroundColor: '#fff' }}>
                        <div>
                            <div>
                                <Button onClick={this.goLogin} type="primary" style={{ width: '90%', display: isLogin ? "none" : "block", marginLeft: '0.35rem', marginTop: '3rem' }} >还未登录，点击此处快速登录</Button>
                            </div>
                            <div style={{ display: isLogin ? 'block' : 'none', marginBottom: '1rem' }}>
                                {
                                    listByGrayfont.map((item, i) => {
                                        return (
                                            <ul key={i}>
                                                <li style={{ marginBottom: '0.5rem' }}>
                                                    <div style={{ marginBottom: '0.3rem', width: '100%', height: '1.2rem' }}>
                                                        <img src={item.grayfontImg} alt="" style={{ float: 'left', borderRadius: '50%' }} />
                                                        <h2 style={{ marginTop: '0.35rem', marginLeft: '0.3rem', float: 'left', color: 'black' }}>{item.grayfont}</h2>
                                                        <h2 style={{ padding: '0.4rem 0', marginLeft: '0.5rem', color: 'red', fontSize: '18px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis', width: '70%' }}>{item.title}</h2>
                                                    </div>
                                                    <Link to={"/food/detail/" + item._id} key={i}>
                                                        <div style={{ width: '100%' }}>
                                                            <img src={item.image} alt="" style={{ width: '100%' }} />
                                                        </div>
                                                        <div>
                                                            <h2 style={{ width: '90%', color: 'black', fontSize: '16px', marginLeft: '0.3rem' }}>{item.tel}</h2>
                                                        </div>
                                                    </Link>
                                                    <div style={{ marginLeft: '0.2rem', marginTop: '0.2rem' }}>
                                                        <i className="icon iconfont icon-dianzan11" onClick={() => this.zan(item.zan, item._id)}></i>
                                                        <span style={{ fontSize: '0.4rem' }} >{item.zan}</span>

                                                    </div>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#fff' }}>
                        <div style={{ height: '45px' }}>
                            <h2 style={{ marginLeft: '25px', fontSize: '21px', padding: '10px', color: 'black', width: '120px', float: 'left' }}>为你推荐</h2>
                        </div>

                        {
                            this.props.food.map((f, index) => {
                                return (
                                    <Link to={"/food/detail/" + f._id} key={index}>
                                        <div key={index} style={{ width: '100%', height: '109px' }}>
                                            <div style={{ float: "left", width: '148px', marginLeft: '15px' }}>
                                                <img src={f.image} alt="" style={{ width: '148px', }} />
                                            </div>
                                            <div>
                                                <h2 style={{ padding: '5px', marginLeft: '170px', fontSize: '16px', color: 'red', width: '150px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis' }}>菜名:{f.title}</h2>
                                            </div>
                                            <div>
                                                <h2 style={{ marginLeft: '170px', padding: '5px', width: '160px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis' }}>材料:{f.ing}</h2>
                                            </div>
                                            <div style={{ marginLeft: '170px', padding: '5px', }}>
                                                <h2 >{f.stats}</h2>
                                            </div>
                                            <div>
                                                <h2 style={{ marginLeft: '170px', padding: '5px', }}>作者:{f.grayfont}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        Content of third tab
      </div>
                    ></Tabs>
            </div>
        )
    }
}