import Component from "../library/Component";
import h from "../library/hyperscript";
import {mount} from "../library/mount";


export default class Register extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {

            inputs: [
                {
                    labelText: "Vardas",
                    placeholder: 'Vardenis',
                    name: 'name',
                    type: 'text'

                },
                {
                    labelText: "Pavardė",
                    placeholder: 'Pavardenis',
                    name: 'surname',
                    type: 'text'
                },
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
                    name: 'Registracija',
                    type: 'submit',
                    title: 'Registracija',
                    class: "button-class"
                }
            ],
            credentials: {}


        }
    }

    registerForm(e) {
        console.log(e)
        e.preventDefault();


        fetch('http://rest.stecenka.lt/register', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state.credentials)
        })
            .then(response => response.json())
            .then(data => {
                if (data === 'success') {
                    this.props.route("login")

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
                        keyup: e => this.handleInput(input.name, e.target.value),
                        placeholder: input.placeholder,
                        type: input.type,
                        name: input.name
                    }));
        });
        const buttons = this.state.buttons.map(button => {
            return h('button', {

                    type: button.type,
                    name: button.name,
                    class: button.class
                },
                button.title,
            )
        })
        const text = h("h4", {}, "Jau užsiregistraves?")
        const icon = h("i", {class: "fas fa-smile icon1"})
        const icon2 = h("i", {
            class: "fas fa-sign-in-alt icon2",
            click: () => this.props.route("login"),
        })
        const form = h('form', {
            class: "form",
            submit: (e) => this.registerForm(e),
        }, icon, ...inputs, ...buttons, text, icon2);
        return h('div', {class: 'register-container'}, form);
    }
}

