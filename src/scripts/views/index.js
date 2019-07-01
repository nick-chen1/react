
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Guide } from "./guide";
import { App } from "./app";
import PropTypes from "prop-types"
import { Search } from "./search";
import { Login } from "./login";
import {Message} from "./message"
import {Food} from "./food"

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
                <Route path="/search" component={Search} ></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/message" component ={Message} ></Route>
                <Route path="/food/detail/:foodId?" component={Food}></Route>

                <Route render={() => (<Redirect to="/app/" />)}></Route>
            </Switch>
        )
    }
}
Layout.childContextTypes = {
    props: PropTypes.object
}
