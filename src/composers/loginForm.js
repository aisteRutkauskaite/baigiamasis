   // export function createForm(){
   //  const form = document.createElement("form");
   //  document.body.appendChild(form);
   //     const inputName = document.createElement("input" );
   //     const inputPaswword = document.createElement("input");
   //     const button = document.createElement("button");
   //     form.appendChild(inputName);
   //     form.appendChild(inputPaswword);
   //     form.appendChild(button);
   //     button.setAttribute("type","submit");
   //     button.innerText= "Login";
   //     inputName.setAttribute("placeholder", "enter name");
   //     inputPaswword.setAttribute("placeholder", "enter password");
   //    inputPaswword.setAttribute("type","password");
   // }

   import {generateForm} from './generateForm'
   import {mainPage} from "./main";
   import {mount} from "../library/mount";
   import {user} from '../login';

   export function loginForm() {
       return generateForm(inputs, buttons, fn);
   }
   function fn(e) {

       e.preventDefault();
       console.log(e.preventDefault())
       const credentials = {};
       inputs.forEach(inputData => {
           credentials[inputData.name] = inputData.value;
       });
       console.log(credentials);
       fetch('http://rest.stecenka.lt/login', {
           headers: {
               'Content-type': 'application/json'
           },
           method: 'POST',
           body: JSON.stringify(credentials)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               }
           })
           .then(token => {
               if (token) {
                   localStorage.setItem('token', token);
                   user.token = 'Bearer ' + token;
                   console.log(token);
               }
           });
   }
   const inputs = [
       {
           class: 'input input--white',
           placeholder: 'Email',
           name: 'email',
           type: 'email',
           value: ""
       },
       {
           placeholder: 'Password',
           name: 'password',
           type: 'password',
           value: ""
       }
   ]
   const buttons = [
       {

           class: 'button',
           name: 'login',
           type: 'submit',
           title: 'login'
       }
   ]