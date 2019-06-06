import React from 'react';

const API = 'https://jsonplaceholder.typicode.com/';

class Post extends React.Component {

    constructor() {
        super();
        this.state = { posts: [] };
        this.GetPost();
    }

    GetPost() {
        fetch(API + 'posts')
            .then(response => response.json())
            .then(data => {

                this.setState({ posts: data });
                console.log(JSON.stringify(data));
            });

    }

    render() {

        const PostLists = this.state.posts.map((post, index) => {
            return (
                <tr class="striped--light-gray ">
                <td class="pv2 ph3">{this.state.posts[index].title}</td>
                <td class="pv2 ph3">{this.state.posts[index].body}</td>
                </tr>
            )
        })

        return (
            <div>               
                <table className="collapse ba br2 b--black-10 pv10 ph10">
                    <tbody><tr className="striped--light-gray ">
                        <th className="pv2 ph3 tl f6 fw6 ttu">Name</th><th class="tr f6 ttu fw6 pv2 ph3">Rating</th></tr>
                       {PostLists}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Post