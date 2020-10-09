import Component from "../library/Component";
import {createNode} from "../library/createNode";

import {user} from "../Login";
import Navigator from "../library/Navigator";
import h from "../library/hyperscript";


export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.postFetch()

    }

    postFetch() {
        const user = JSON.parse(localStorage.getItem("user"))
        console.log(user)

        fetch('http://rest.stecenka.lt/api/skelbimai', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': user.token,
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({posts: data});
                console.log(this.state);
            });
    }

    deletePost(id) {
        const user = JSON.parse(localStorage.getItem('user'))
        fetch('http://rest.stecenka.lt/api/skelbimai/' + id, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': user.token
            },
            method: 'DELETE'
        }).then((data) => {
            const postsAll = this.state.posts.filter(post => post.id !== id);
            this.setState({posts: postsAll});
            console.log(data);
        });
    }

    render() {

        const allPosts = this.state.posts.map(post => {
            return h(
                'div',
                {class: 'post-card'},
                h('h3', {class: "post"}, post.title),
                h("h6", {}, post.created_at.split("T")[0]),
                h('p', {}, post.body),
                post.user_id === JSON.parse(localStorage.getItem('user')).id ? h('button', {
                    class: 'delete-button',
                    click: () => this.deletePost(post.id)
                }, 'Delete Post') : ''
            )
        });


        return h('div', {class: "main-container"}, ...allPosts)
        // return h('div', {class: 'bodyDiv'}, postsDiv);
    }
}


