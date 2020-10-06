
// import { createNode } from "./createNode";
//
// export function generateForm(inputs, buttons) {
//     const form = document.createElement('form');
//
//     inputs.forEach(inputAtrributes => {
//         const inputElement = createNode("input", inputAtrributes);
//         form.append((inputElement))
//     });
//
//    buttons.forEach(buttonAtrributes => {
//         const buttonElement = createNode("button", buttonAtrributes);
//         buttonElement.innerHTML = buttonAtrributes.title;
//         form.append(buttonElement)
//     });
//
//    return form;
// }

// function generateInput(inputData, parent) {
//     const inputElement = document.createElement('input');
//
//     for (const attributeName in inputData) {
//         inputElement.setAttribute(attributeName, inputData[attributeName]);
//     }
//
//     parent.append(inputElement);
// }
//
// function generateButton(buttonData, parent) {
//     const buttonElement = document.createElement('button');
//
//     for (const attributeName in buttonData) {
//         buttonElement.setAttribute(attributeName, buttonData[attributeName]);
//     }
//
//     buttonElement.innerHTML = buttonData.title;
//     parent.append(buttonElement);
// }
//





// export function createForm() {
//     const $form  = document.createElement("form");
//     const $button = document.createElement("button");
//
//     function createInput(input){
//         const $input  = document.createElement("input");
//         for (const attributeName in input){
//             $input.setAttribute(attributeName, input[attributeName]);
//         }
//         $form.append($input);
//     }
//     function createButton(){
//         $button.setAttribute("type","submit");
//         $button.innerText= "Login";
//         $form.append($button);
//     }
//     inputs.forEach(createInput);
//     document.body.appendChild($form);
//
//     $button.forEach(createButton)
// }
import { createNode } from "../library/createNode";
import h from "../library/hyperscript";
import {login} from "../login";

export function generateForm(inputs = [], buttons = [], handler) {
    // const form = document.createElement('form');
    // inputs.forEach(inputAttributes => {
    //     const inputElement = createNode('input', inputAttributes);
    //     inputElement.addEventListener('keyup', () => {
    //         inputAttributes.value = inputElement.value;
    //     });
    //     form.append(inputElement);
    // });
    // buttons.forEach(buttonAttributes => {
    //     const buttonElement = createNode('button', buttonAttributes, buttonAttributes.title);
    //     form.append(buttonElement);
    // });
    // form.addEventListener('submit', handler);
    // form.style.display = 'flex';
    // form.style.flexDirection = 'column';
    // form.style.width = '200px';
    const inputNode = inputs.map(inputAttributes => {
        inputAttributes.change = (e) => {
          inputAttributes.value = e.target.value;
        }
        return h("input", inputAttributes)
});
    const buttonNode = buttons.map(buttonAttributes => h("button", buttonAttributes, buttonAttributes.title));
    console.log(buttonNode)
    // const inputOne = createHyperScript("input", {})
    // console.log(createHyperScript("form", {class: "form",method: "POST"} ))
    return h("form", {class: "form", method: "POST", submit: handler }, ...inputNode, ...buttonNode );
}




