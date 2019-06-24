import "./index.scss"
// import {Head} from "@scripts/component/head"
import { Head } from "../../component/head"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';


export class Search extends Component {
    getSearch = (val) => {
        console.log(this.refs.one.state.value)
    }

    render() {
        return (
            <div>
                <Head title="搜索" show={true}></Head>
                <WingBlank>
                    <WhiteSpace />
                    <SearchBar ref="one" placeholder="Search" maxLength={8} onBlur={this.getSearch} />
                </WingBlank>
            </div>
        )
    }
}