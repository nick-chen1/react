import "./index.scss"
import { Head } from "~/component/head"
import { connect } from "react-redux"
import { getfoodtype, getfoodlist } from "../../actions"
import { Tabs} from 'antd-mobile';
import { Link } from "react-router-dom";
var type = [];
@connect(
    state => {
        // console.log(state)
        return {
            ...state.data

        }
    }
)

export class Classify extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getfoodtype({
            url: "/react/getFoodType",
            cb() { },
        }))
        this.props.dispatch(getfoodlist({
            url: "/react/getFood",
            params: {},
            cb() { },
        }))
    }

    render() {
        const { foodtype, food } = this.props
        // console.log(this.props)
        const tabs = foodtype.map((item) => {
            item.title = item.text;
            return item;
        })
        if (tabs.length > 0) type = tabs
        // console.log(type)
        return (
            <div>
                <div style={{ position: 'fixed', top: '0', right: '0', left: '0', zIndex: '5', backgroundColor: 'white' }}>
                    <h2 style={{ lineHeight: '36px', width: '100%', textAlign: 'center', fontSize: '17px' }}>分类</h2>
                </div>
                <div style={{ marginTop: '0.7rem' }}>
                    <Tabs tabs={type}
                        initialPage={0} onChange={this.diandian}
                    >
                        {
                            food.map((item, i) => {
                                if (item.type.text == type[0].title) {
                                    return (
                                        <Link to={"/food/detail/" + item._id} key={i}>
                                            <div key={i} style={{ width: '100%', height: '109px' }}>
                                                <div style={{ float: "left", width: '148px', marginLeft: '15px' }}>
                                                    <img src={item.image} alt="" style={{ width: '148px', }} />
                                                </div>
                                                <div>
                                                    <h2 style={{ padding: '5px', marginLeft: '170px', fontSize: '16px', color: 'red', width: '150px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis' }}>菜名:{item.title}</h2>
                                                </div>
                                                <div>
                                                    <h2 style={{ marginLeft: '170px', padding: '5px', width: '160px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis' }}>材料:{item.ing}</h2>
                                                </div>
                                                <div style={{ marginLeft: '170px', padding: '5px', }}>
                                                    <h2 >{item.stats}</h2>
                                                </div>
                                                <div>
                                                    <h2 style={{ marginLeft: '170px', padding: '5px', }}>作者:{item.grayfont}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })
                        }
                        {
                            food.map((item, i) => {
                                if (item.type.text == tabs[1].title) {
                                    return (
                                        <Link to={"/food/detail/" + item._id} key={i}>
                                            <div key={i} style={{ width: '100%', height: '109px' }}>
                                                <div style={{ float: "left", width: '148px', marginLeft: '15px' }}>
                                                    <img src={item.image} alt="" style={{ width: '148px', }} />
                                                </div>
                                                <div>
                                                    <h2 style={{ padding: '5px', marginLeft: '170px', fontSize: '16px', color: 'red', width: '150px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis' }}>菜名:{item.title}</h2>
                                                </div>
                                                <div>
                                                    <h2 style={{ marginLeft: '170px', padding: '5px', width: '160px', overflow: 'hidden', whiteSpace: "nowrap", textOverflow: 'ellipsis' }}>材料:{item.ing}</h2>
                                                </div>
                                                <div style={{ marginLeft: '170px', padding: '5px', }}>
                                                    <h2 >{item.stats}</h2>
                                                </div>
                                                <div>
                                                    <h2 style={{ marginLeft: '170px', padding: '5px', }}>作者:{item.grayfont}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })
                        }
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of third tab
                    </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}