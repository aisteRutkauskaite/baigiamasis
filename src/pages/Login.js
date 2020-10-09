import Component from "../library/Component";
import h from "../library/hyperscript";
import {user} from "../login";
import Register from "./Register";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            inputs: [
                {
                    labelText: "Email",
                    placeholder: 'emalais@mail.lt',
                    name: 'email',
                    type: 'email',
                },
                {
                    labelText: "Slaptažodis",
                    placeholder: 'Slaptažodis',
                    name: 'password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    name: 'Prisijungti',
                    type: 'submit',
                    title: 'Prisijungti',
                    class: "button-class"
                }
            ],
            credentials: {
                email: "",
                password: ""
            }
        }
    }

    fn(e) {

        e.preventDefault();
        console.log(e.preventDefault())


        fetch('http://rest.stecenka.lt/login', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state.credentials)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(user => {
                console.log(user)
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.props.login(user);
                }
            });
    }

    handleInput = (name, value) => {
        this.state.credentials[name] = value;
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
        const buttons = this.state.buttons.map(button => {
            return h('button', {
                    type: button.type,
                    name: button.name,
                    class: button.class,
                },
                button.title
            )
        })
        const text2 = h("h4", {}, "Uzsiregistruoti?")
        const icon = h("i", {class: "fas fa-smile icon1"})
        const icon2 = h("i", {
            class: "fas fa-sign-in-alt icon2",
            click: () => this.props.route("register"),
        })
        const form = h('form', {
            class: "form",
            submit: (e) => this.fn(e),
        }, icon, ...inputs, ...buttons, text2, icon2);
        return h('div', {class: 'register-container'}, form);
    }
}


