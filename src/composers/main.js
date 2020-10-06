// import {createNode} from "../library/createNode";
// import {user} from '../login';
// import {newPost} from "./post";
//
//
// export function mainPage() {
//     const body = document.querySelector('body');
//     const main = createNode('main', {});
//     main.classList.add("main")
//     const mygtukas = document.createElement("button");
//     mygtukas.classList.add("mygtukas");
//     mygtukas.innerText = "Pasveikink";
//     mygtukas.addEventListener("click", formOpen)
//     main.append(mygtukas)
//
//     function formOpen(){
//         main.append(newPost())
//     }
//
//
//     fetch('http://rest.stecenka.lt/api/sveikinimai', {
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': user.token,
//         }
//     })
//         .then(response => response.json())
//         .then(sveikinimai => {
//             sveikinimai.forEach(element => {
//                 let title = element.title;
//                 let body = element.body;
//                 let block = createNode("div", );
//                 let fullTittle = createNode("h2");
//                 let fullBody = createNode("p");
//                 block.classList.add("block");
//                 fullTittle.classList.add("bodyclass");
//                 fullBody.classList.add("bodyclass");
//                 main.append(block);
//                 block.append(fullTittle, fullBody)
//                 fullTittle.append(title);
//                 fullBody.append(body);
//                 // console.log(sveikinimai)
//
//             })
//
//             // console.log(sveikinimai)
//         })
//     return main;
// }
//

import {createNode} from "../library/createNode";
import {user} from "../login";
import {sveikinimas} from "./sveikinimas";
import {newPost} from "./post";
import {mount} from '../library/mount';

export function main() {
    const main = createNode("main", {});
    main.append(newPost());
    main.classList.add("main");
    console.log(main);
    fetch('http://rest.stecenka.lt/api/sveikinimai', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': user.token,
        }
    })
        .then(response => response.json())
        .then(sveikinimai => {
            const sveikinimuElementai = sveikinimai.map(sveikinimasData => sveikinimas(sveikinimasData));
            const main = createNode('main', {}, ...sveikinimuElementai);
            mount(main);
        });
}
