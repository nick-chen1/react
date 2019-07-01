

import "./index.scss";
import { connect } from "react-redux";
import { getFoodById, inserFouseOn, getFouName, updatatext, updatadisplay, inserPing, getPing, updatecolor, inserlove, getlovelist } from "../../actions"
import { Toast } from "antd-mobile"


@connect(
    state => {
        return {
            ...state.data
        }
    }
)

export class Food extends Component {

    inserFouseOn = () => {
        if (localStorage.getItem("username") == null) {
            localStorage.setItem("pathname", this.props.location.pathname)
            Toast.info("还未登录,请立即登录");
            this.props.history.push("/login")
        } else {
            if (this.props.display == true) {
                const { dispatch } = this.props;
                dispatch(inserFouseOn({
                    url: "/react/inserFo",
                    user: {
                        grayfont: this.props.foodId.grayfont,
                        username: localStorage.getItem("username")
                    },
                    cb() { }
                }))
                Toast.info("关注成功");
                dispatch(updatatext("已关注"))
                dispatch(updatadisplay(false))
            }

        }
    }

    goto = () => {
        window.history.back(-1);
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getFoodById({
            url: "/react/getFoodById",
            params: {
                _id: this.props.match.params.foodId
            },
            cb() { }
        }))
        dispatch(getFouName({
            url: "/react/getFN",
            params: {
                username: localStorage.getItem("username")
            },
            cb() { }
        }))
        this.props.dispatch(getPing({
            url: '/react/getpinglun',
            params: {
                id: this.props.match.params.foodId
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

    pinglun = (title, id) => {
        this.refs.one.value ? this.props.dispatch(inserPing({
            url: '/react/inserping',
            params: {
                title: title,
                pinglun: this.refs.one.value,
                username: localStorage.getItem("username"),
                id: id
            },
            cb() { }
        })) : Toast.info("请填写评论内容");
        this.refs.one.value = "";
        Toast.info("评论成功");
        this.props.dispatch(getPing({
            url: '/react/getpinglun',
            params: {
                id: this.props.match.params.foodId
            },
            cb() { }
        }))
    }

    guanzhu = () => {
        if (this.props.colorPlay == true) {
            this.props.dispatch(inserlove({
                url: '/react/inlove',
                params: {
                    food: this.props.foodId,
                    username: localStorage.getItem("username"),
                },
                cb() { }
            }))
            Toast.info("收藏成功")
            this.props.dispatch(updatecolor(false));
        }
    }

    render() {
        const { foodId, text, namelist, display, pinglun, colorPlay, lovelist } = this.props;
        const username = localStorage.getItem("username")
        var item = [];
        var userlist = [];
        var user = foodId.user;
        var smillList = [];
        if (foodId.smill) {
            var smill = foodId.smill;
            for (var i in smill) {
                smillList.push(smill[i])
            }
        }
        for (var i in namelist) {
            if (foodId.grayfont == namelist[i].grayfont) {
                const { dispatch } = this.props;
                dispatch(updatatext("已关注"))
                dispatch(updatadisplay(false))
            }
        }
        for (var i in lovelist) {
            if(foodId._id == lovelist[i].food._id){
                this.props.dispatch(updatecolor(false))
            }
        }

        for (var i in user) {
            userlist.push(user[i]);
        }

        if (this.props.foodId.ing) {
            var ing = this.props.foodId.ing;
            var arr = ing.split("、")
            for (var i in arr) {
                item.push(String(arr[i]))
            }
        }
        return (
            <div>
                <div onClick={this.goto} style={{ width: '100%', height: '0.3rem', position: 'fixed' }}>
                    <i className="icon iconfont icon-fanhui" style={{ float: 'left', padding: '13px' }}></i>
                </div>
                <img src={foodId.image} alt="" style={{ width: '100%' }} className="move-in" />
                <h2 style={{ textAlign: 'center', padding: '15px', fontSize: '21px' }}><strong>{foodId.title}</strong></h2>
                <div style={{ width: '80%', marginLeft: '0.72rem', borderBottom: '1px solid #EAEAEA' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '0.2rem' }}>{foodId.num}</h2>
                </div>
                <div>
                    <div style={{ width: '100%', height: '2.0rem' }}>
                        <img src={foodId.grayfontImg} alt="" style={{ padding: '0.3rem', borderRadius: '50%', float: 'left' }} />
                        <h2 style={{ float: 'left', marginTop: '0.5rem', fontSize: '0.3rem' }}>{foodId.grayfont}</h2>
                        <div style={{ float: 'right', width: '1.0rem', height: '0.4rem', marginRight: '0.8rem', marginTop: '0.6rem', border: '1px solid red', borderRadius: '12%' }}>
                            <h2 style={{ textAlign: 'center', lineHeight: '0.4rem', color: 'red' }} onClick={this.inserFouseOn}>{text}</h2>
                            <div style={{ float: 'right', marginTop: '-19px', marginRight: '-28px' }}>
                                <i className="icon iconfont icon-star" style={{ color: colorPlay ? 'black' : 'red' }} onClick={this.guanzhu}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{ marginLeft: '0.4rem', width: '90%', fontSize: '16px' }}>{foodId.tel}</h2>
                </div>
                <div style={{ width: '100%', height: '1.5rem' }}>
                    <h2 style={{ float: 'left', lineHeight: '1.5rem', marginLeft: '0.4rem', fontSize: '18px' }}><strong>用料</strong></h2>
                    <i className="icon iconfont icon-cheng" style={{ lineHeight: '1.5rem', marginLeft: '0.1rem' }}></i>
                    <div style={{ float: 'right', marginRight: '0.7rem', lineHeight: '1.5rem' }}>
                        <h2 style={{ color: 'red' }}>丢进菜篮子</h2>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <div style={{ marginLeft: '0.4rem' }}>
                        {item.map((i, index) => {
                            return (
                                <div key={index} style={{ padding: '0.5rem 0', fontSize: '0.3rem', borderBottom: '1px solid #EAEAEA' }}>
                                    {i}
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <div>
                        {
                            userlist.map((f, i) => {
                                return (
                                    <div>
                                        <h2 style={{ marginLeft: '0.4rem', padding: '0.3rem 0', fontSize: '16px' }}><strong>步骤 {i + 1}</strong></h2>
                                        <img src={f.img} alt="" style={{ width: '88%', marginLeft: '0.4rem', borderRadius: '5%' }} />
                                        <h2 style={{ padding: '0.5rem 0', marginLeft: '0.4rem', width: '80%', fontSize: '16px' }} >{f.text}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h2 style={{ marginLeft: '0.4rem', padding: '0.5rem 0' }}>小贴士</h2>
                    {
                        smillList.map((s, i) => {
                            return (
                                <div>
                                    <h2 style={{ width: '90%', marginLeft: '0.4rem', padding: '0.1rem 0' }}>{i + 1} {s}</h2>
                                </div>
                            )
                        })
                    }
                </div>
                <div >
                    {/* ref={input => this.input = input} (event)=>{ console.log(event.target.value) } ref={ ( (name)=>{ return ( ref )=>{ this[ name ] = ref ; }  } )( item.name )  ref={el=>this[`inp+${i}`]=el}}*/}
                    <input
                        type="text" ref="one" style={{ width: '71%', border: '0px', padding: '0.1rem 0', marginInlineStart: '0.3rem' }} placeholder="参与评论......" />
                    <div style={{ border: '1px solid red', float: 'right', border: '1px solid red', width: '10%', borderRadius: '14px', textAlign: 'center', marginRight: '0.5rem', color: 'red', marginTop: '0.1rem' }}>
                        <span onClick={() => this.pinglun(foodId.title, foodId._id)}>确认</span>
                    </div>
                </div>
                <div>
                    <h2 style={{ padding: '0.3rem', fontSize: '16px', color: 'black' }}>这道菜的评论</h2>
                    <h2 style={{ padding: '0.2rem 0', marginLeft: '0.3rem' }}>{username}:</h2>

                    {
                        pinglun.map((ping, i) => {
                            return (
                                <div key={i}>
                                    <h2 style={{ marginLeft: '0.3rem', padding: '0.2rem' }}>{ping.pinglun}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}