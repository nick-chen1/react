import { Switch, Route, Redirect } from "react-router-dom"

import "./index.scss"
import { Home } from "../home";
import { Classify } from "../classify";
import { Cart } from "../cart";
import { My } from "../my";
import {Foot} from "../../component/foot/index"
import {MFoot} from "../../component/mFoot/index"

export class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/classify" component={Classify} />
                    <Route path="/app/cart" component={Cart} />
                    <Route path="/app/my" component={My} />
                    <Route render={() => (<Redirect to="/app/home"></Redirect>)}></Route>
                </Switch>
                {/* <Foot></Foot> */}
                <MFoot/>
            </div>
        )
    }
}