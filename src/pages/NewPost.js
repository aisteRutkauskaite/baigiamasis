import Component from "../library/Component";
import h from "../library/hyperscript";
import {user} from "../login";
import Posts from "./Posts";


export default class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {
                    labelText: "Antraštė",
                    placeholder: 'Parduodu o gal ieškau',
                    name: 'title',
                    type: "text",
                },
                // {
                //     labelText: "Skelbimas",
                //     placeholder: 'Kokia tavo žinia',
                //     name: 'body',
                //     type: 'text'
                // }
            ],
            textarea: [
                {
                    labelText: "Skelbimas",
                    placeholder: 'Kokia tavo žinia',
                    name: 'body',
                    type: "text"
                }
            ],
            buttons: [
                {
                    name: 'Skelbti',
                    type: 'submit',
                    title: 'Skelbti',
                    class: "button-class"
                }
            ],
            newPost: {
                title: "",
                body: ""
            }

        }

    }

    postPost(e) {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('user'));

        fetch('http://rest.stecenka.lt/api/skelbimai', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': user.token
            },
            method: "POST",
            body: JSON.stringify(this.state.newPost)
        })
            .then(response => response.json())
            .then((post) => {
                if (post.id) {
                    this.props.route("posts")
                }
            });


    }

    handleInput = (name, value) => {
        this.state.newPost[name] = value;
    }

    render() {


        const inputs = this.state.inputs.map(input => {
            return h(
                "label",
                {},
                input.labelText,
                h(
                    'input',
                    {
                        placeholder: input.placeholder,
                        type: input.type,
                        name: input.name,
                        keyup: e => this.handleInput(input.name, e.target.value),
                    }));
        });
        const textarea = this.state.textarea.map(text => {
            return h(
                "label",
                {},
                text.labelText,
                h('textarea', {
                    placeholder: text.placeholder,
                    name: text.name,
                    type: text.type,
                    keyup: e => this.handleInput(text.name, e.target.value),
                }));

        })
        const buttons = this.state.buttons.map(button => {
            return h('button', {
                    type: button.type,
                    name: button.name,
                    class: button.class,
                },
                button.title
            )
        })


        const icon = h("i", {class: "fas fa-smile icon1"});
        const form = h('form', {
            class: "form",
            submit: (e) => this.postPost(e),
        }, icon, ...inputs, ...textarea, ...buttons);
        console.log('dar veikia')
        return h('div', {class: 'post-container'}, form);
    }
}










