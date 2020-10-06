import {generateForm} from './generateForm'
import {user} from "../login";
import {mount} from '../library/mount';

export function newPost() {
    return generateForm(inputs, buttons, post);
}

function post(e) {
    e.preventDefault();
    const newPost = {};

    inputs.forEach(inputData => {
        newPost[inputData.name] = inputData.value;
        console.log(inputs)
    });

    fetch('http://rest.stecenka.lt/api/sveikinimai', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': user.token,
        },
        method: 'POST',
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
        .then(data => console.log(data));

}

const inputs = [

    {
        placeholder: 'Pauliui',
        name: 'title',
        type: 'text'
    },
    {
        placeholder: 'sveikinimas',
        name: 'body',
        type: 'text'
    }

]

const buttons = [
    {
        name: 'post',
        type: 'submit',
        title: 'sveikinu'
    }
]