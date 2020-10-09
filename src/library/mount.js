import {createNode} from "./createNode";



export function mount(virtualNode, parent) {

    /**
     * virtualNode - object,
     * parent - Dom element
     */

    parent.innerHTML = "";
    const element = createNode(virtualNode);
    parent.append(element);
}
