import "./index.scss"
// import {Head} from "@scripts/component/head"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

import { Link } from "react-router-dom"

import { getSearchFood } from "../../actions"

import { connect } from "react-redux";

@connect(
    state => {
        console.log(state)
        return {
            ...state.data
        }
    }
)

export class Search extends Component {

    getSearch = (val) => {
        var keyword = this.refs.one.state.value;
        const { dispatch } = this.props;
        dispatch(getSearchFood({
            url: 'react/getSearch',
            params: {
                keyword: keyword
            },
            cb() { }
        }))
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getSearchFood({
            url: 'react/getSearch',
            params: {
                keyword: "000000"
            },
            cb() { }
        }))

    }
    clear = () => {
        this.refs.one.state.value = "";
        const { dispatch } = this.props
        dispatch(getSearchFood({
            url: 'react/getSearch',
            params: {
                keyword: "000000"
            },
            cb() { }
        }))
    }


    goto = () => {
        window.history.back(-1);
    }

    render() {
        return (
            <div>
                <div style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '5', backgroundColor: 'white' }}>
                    <WingBlank>
                        <WhiteSpace />
                        <div onClick={this.goto}>
                            <i className="icon iconfont icon-fanhui" style={{ float: 'left', marginTop: '13px' }}></i>
                        </div>
                        <SearchBar ref="one" placeholder="搜索菜谱,食材" maxLength={8} onBlur={this.getSearch} onClear={this.clear} />
                    </WingBlank>
                </div>
                <div style={{marginTop:'1.1rem'}}>
                    {
                        this.props.food.map((f, index) => {
                            return (
                                <Link to={f.titlelianjie} key={index}>
                                    <div key={index} className="move-in" style={{ width: '100%', height: '109px' }}>
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
            </div>
        )
    }
}