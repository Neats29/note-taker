import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
       super(props); 
       this.state = { likes: 0}
    }
    
    handleLikes(e) {
    const count = this.state.likes + 1;
        this.setState({ likes: count })
    }
    
    handleUnlikes(e) {
    const count = this.state.likes - 1;
        this.setState({ likes: count })
    }
    
    render() {
        return (
            <div>
                <textarea></textarea>
                <br />
                <button onClick={this.handleLikes.bind(this)}>Like</button>
                <button onClick={this.handleUnlikes.bind(this)}>Unlike</button>
                <p>{this.state.likes}</p>
                <button>Delete</button>
            </div>
        )
    }
}