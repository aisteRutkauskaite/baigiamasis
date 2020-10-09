import Component from "../library/Component";

import h from "../library/hyperscript";


export default class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return h(
            'div',
            {class: "navigation"},
            h("div", {class: 'posts-icons'},
                h('i', {
                    class: "fas fa-address-card icon-nav",
                    click: () => this.props.route("posts"),
                }, h("span", {}, "Posts")),
                h('i', {
                    class: "fas fa-plus icon-nav",
                    click: () => this.props.route("newPost"),
                }, h("span", {}, "New post"))
            ),

            h("div", {class: 'logout-icon'},
                h('i', {
                    class: "fas fa-sign-out-alt icon-nav",
                    click: () => this.props.exit(),
                }, h("span", {}, "Log out"))
            )
        )

    }
}


