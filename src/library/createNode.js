// export function createNode(nodeName, attribute = {}, child){
// const node = document.createElement(nodeName);
//     for (const attributeName in attribute) {
//         inputElement.setAttribute(attributeName, attribute[attributeName]);
//     }
//
// return node;
// }
import h from "./hyperscript"
// /**
//  *VirtualNode - object
//  */
//
// export function createNode(virtualNode) {
//     const element = document.createElement(virtualNode.nodeName);
//
//     for (const attributeName in virtualNode.attributes) {
//         element.setAttribute(attributeName, virtualNode.attributes[attributeName]);
//     }
//
//     virtualNode.children.forEach(child => {
//         if (typeof child === "string") {
//             const textNode = document.createTextNode(child);
//             element.append(textNode);
//         } else {
//             element.append(createNode(child));
//         }
//     });
//
//     return node;
// }

export function createNode({nodeNameOrComponent, attributes, children}) {
    //Klausimas ar nodeName = string ar klase
    if (typeof nodeNameOrComponent === 'function') {
        return renderComponent(nodeNameOrComponent, attributes);
    }



    const element = document.createElement(nodeNameOrComponent);


    for (const attributeName in attributes) {
        if (typeof attributes[attributeName] === 'function') {
            console.log("funkcija")
            element.addEventListener(attributeName, attributes[attributeName])
        } else {
            element.setAttribute(attributeName, attributes[attributeName]);
        }
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            element.append(textNode);
        } else {
            element.append(createNode(child));
        }
    });
    return element;
}

function renderComponent(classComponent, attributes) {
    const component = new classComponent(attributes);
    const virtualNode = component.render()
    component.element = createNode(virtualNode);
    return  component.element;


}