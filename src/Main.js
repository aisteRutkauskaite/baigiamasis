import {loginFromToken} from "./login";
import h from "./library/hyperscript";
import  Navigation  from "./composers/Navigation";
import Component from "./library/Component";

export default class Main  extends  Component{
    constructor() {
        super();
        this.login()
    }

    login() {
        this.state.isLoggedIn = loginFromToken();
    }

    render() {
        if (this.state.isLoggedIn){
            return h("main", {}, h(Navigation, {showing: true}));
        } else {
            // return createHyperScript("form");
            return h("main", {},h(Navigation,{showing: true}));
        }
    }
}

