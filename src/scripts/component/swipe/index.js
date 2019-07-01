
import PropTypes from "prop-types"
import {WingBlank,Carousel } from "antd-mobile"
// 封装组件  props children 
// new Swiper()  实例化 
export default class Swipe extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    render(){
        console.log(this.props);
        return (
            <div style={{ marginTop: '0.9rem' }}>
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
                </div>
        )
    }

    componentWillMount(){
        setTimeout(() => {
            this.setState({
                data: [require("@/assets/images/0c1992b977554b31b948341849b89312_1500w_1500h.jpg"), require("@/assets/images/2eb0a0a201a811e7bc9d0242ac110002_1280w_1024h.jpg"), require("@/assets/images/3575bb0acd0711e6bc9d0242ac110002_1280w_960h.jpg")],
            });
        }, 100);
    }

    componentDidMount(){
        let {id,options,children} = this.props;
        if(children.length>0){
            let mySwiper = new Swiper("#"+id,options);
        }
        
    }

    componentDidUpdate(){
        console.log("update ...." ) 
        let {id,options,children} = this.props;
        if(children.length>0){
            let mySwiper = new Swiper("#"+id,options);
        }
    }
}

Swipe.propTypes = {
    id:PropTypes.string.isRequired,
    options:PropTypes.object.isRequired
}
// 静态属性  
Swipe.item  =  (props)=>{
    console.log(props);  // this.props; 
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    )
}   

