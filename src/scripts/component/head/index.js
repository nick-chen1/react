

import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import PropTypes from "prop-types"

export class Head extends Component {
    goBack = (show) => {
        const { history } = this.context.props;
        if (show) {
            history.go(-1)
        }
    }
    goSearch = () => {
        const { history } = this.context.props;
        history.push("/search")
    }

    render() {
        const { title, show } = this.props;
        return (
            <NavBar
                mode="dark"
                icon={show && <Icon type="left" />}
                onLeftClick={() => this.goBack(show)}
                rightContent={[
                    // <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.goSearch} />,
                    // <Icon key="1" type="ellipsis" />,
                ]}
           style={{backgroundColor:'red'}}  >{title}</NavBar>
        )
    }
}
Head.contextTypes = {
    props: PropTypes.object
}