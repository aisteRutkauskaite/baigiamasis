import h from "../library/hyperscript";
import {loginFromToken} from "../login";
import Component from "../library/Component";



export default class Navigation extends Component{
    constructor(props) {
        super(props);
        this.state = {
        navigationLinks: ["Home", "Login", "Register"],
        isActive: false
        };
    }
    activate(){
        this.setState({
            isActive: !this.state.isActive
        })

        console.log(this.state)

    }
    login() {
        this.setState({
            isLoggedIn: loginFromToken()
        })
 }


    render() {
        // console.log(props.showing)
        const burgerLineOne = h('div', {class:"header__line header__line--1" }  );
        const burgerLineTwo = h('div', {class:"header__line header__line--2" }  );
        const burgerLineThree = h('div', {class:"header__line header__line--3" }  );
        const burger = h("section",{class: "header__burger", click: () => this.activate()}, burgerLineOne, burgerLineTwo, burgerLineThree)
        const links = this.state.navigationLinks.map(link => {
            return h('li', {class: "li" },h('a', {href: '#'}, link));
        });
        const ul = h('ul', {}, ...links);
        return h("nav",{class: "nav"}, this.state.isActive === true ? ul : "", burger);
        // if (this.state.isActive) {
        // return h('nav', {class: "nav"}, ul, burger);
        // } else {
        //     return h('nav', {class: "nav"},  burger);
        // }
    }



}

