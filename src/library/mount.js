import {createNode} from "./createNode";

// export function mount(element) {
//     const virtualNode = {};
//     // const bucket = document.getElementById('app');
//     const bucket = createNode("app", virtualNode)
//     bucket.innerHTML = '';
//     bucket.append(element);
// }

export function mount(virtualNode, parent) {
    // const button = {
    //
    // }
    /**
     * virtualNode - object,
     * parent - Dom element
     */
    // const bucket = document.getElementById('app');
    parent.innerHTML= "";
    const element = createNode(virtualNode);
    parent.append(element);
}
