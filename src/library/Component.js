import {createNode} from "./createNode";

export default class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
        this.element = null;
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        };
        this.updateComponent();
    }

    updateComponent() {
        const vNode = this.render();
        const element = createNode(vNode);
        console.log(this.element);
        this.element.replaceWith(element);
        this.element = element;
    }

    render() {

    }
}