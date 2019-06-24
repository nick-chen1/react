
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Guide } from "./guide";
import { App } from "./app";
import { Cart } from "./cart";
import { Classify } from "./classify";
import { Home } from "./home";
import { My } from "./my";
import PropTypes from "prop-types"
import { Search } from "./search";
import { Login } from "./login";

export default class IndexView extends Component {
    render() {
        return (
            <Router>
                <div id="main">
                    <Route path="" exact component={Layout} />
                </div>
            </Router>
        )
    }
}
//路由配置
export class Layout extends Component {
    getChildContext() {
        return {
            props: this.props,
        }
    }
    render() {
        function chong() {
            return <Redirect to="/guide" />
        }

        return (
            <Switch>
                <Route path="/" exact render={chong} />
                <Route path="/guide" component={Guide}></Route>
                <Route path="/app" component={App}></Route>
                {/* <Route path="/cart" component={Cart}></Route>
                <Route path="/classify" component={Classify}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/my" component={My}></Route> */}
                <Route path="/search" component={Search} ></Route>
                <Route path="/login" component={Login}></Route>

                <Route render={() => (<Redirect to="/app/" />)}></Route>
            </Switch>
        )
    }
}
Layout.childContextTypes = {
    props: PropTypes.object
}
