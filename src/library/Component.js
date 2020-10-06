import {createNode} from "./createNode";

export default class Component {
    constructor(props){
        this.props = props;
        this.state ={};
        this.element = null;
    }
     setState (newState){
         this.state = {
             ...this.state,
             ...newState
         };
         // this.state = object;
         this.updateComponent();
     }
    updateComponent(){
        const vNode = this.render();
        const element = createNode(vNode);
        this.element.replaceWith(element)
        this.element = element
        console.log(this.element)
        console.log(element)
    }
 render(){

 }
}