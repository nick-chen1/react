import "./index.scss"
// import {Head} from "@/scripts/component/head"
import { Head } from "../../component/head"
import axios from "@/utils/axios"
import { WingBlank, Carousel, Badge, Tabs, ListView } from "antd-mobile"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

import { getfoodlist } from "../../actions"


@connect(
    state => {
        console.log(state)
        return {
            ...state.data
        }
    }
)

export class Home extends Component {
    state = {
        banner: [],
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

        setTimeout(() => {
            this.setState({
                data: [require("@/assets/images/0c1992b977554b31b948341849b89312_1500w_1500h.jpg"), require("@/assets/images/2eb0a0a201a811e7bc9d0242ac110002_1280w_1024h.jpg"), require("@/assets/images/3575bb0acd0711e6bc9d0242ac110002_1280w_960h.jpg")],
            });
        }, 100);
    }

    render() {
        const tabs = [
            { title: <Badge >关注</Badge> },
            { title: <Badge >发现</Badge> },
            { title: <Badge >故事</Badge> },
        ];

        return (
            <div>
                <Head title="首页" ></Head>
                <WingBlank>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={val}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
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
                <Tabs style={{ width: '50%', }} tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        Content of first tab
      </div>

                    <div style={{ backgroundColor: '#fff' }}>
                        <h2 style={{ marginLeft: '25px', fontSize: '21px', padding: '10px', color: 'red' }}>为你推荐</h2>
                        {
                            this.props.food.map((f, index) => {
                                return (
                                    <Link to="/app/" key={index}>
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