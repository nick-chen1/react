
import { foots } from "../foot"
import "./index.scss"
import { TabBar } from 'antd-mobile';

export class MFoot extends Component {

    componentWillMount(){
        // console.log(this.context.props)
        const {location,history} =this.context.props;
        var name = location.pathname.split("/app/")[1];
        // console.log(name)
        this.setState({
            selectedTab:name,
        })
    }

    state = {
        selectedTab: 'home',
    };

    render() {
        return (
            <div className="footer">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                >
                    {
                        foots.map((foot, i) => {
                            return (
                                <TabBar.Item
                                    title={foot.txt}
                                    key={i}
                                    icon={<i className={"icon iconfont " + foot.icon} style={{ width: '22px', height: '22px', display: "block" }} />}
                                    selectedIcon={<i className={"icon iconfont " + foot.icon} style={{ width: '22px', height: '22px', display: "block", }} />}
                                    selected={this.state.selectedTab === foot.name}
                                    onPress={() => {
                                        const {history} = this.context.props
                                        this.setState({
                                            selectedTab: foot.name,
                                        });
                                        history.push(foot.path)
                                    }}

                                    data-seed="logId"
                                >
                                </TabBar.Item>
                            )
                        })
                    }

                </TabBar>
            </div>
        )
    }
}
import PropTypes from "prop-types"
MFoot.contextTypes = {
    props:PropTypes.object
}