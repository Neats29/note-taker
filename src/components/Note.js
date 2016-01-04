import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
       super(props); 
       this.state = { likes: 0, unlikes: 0}
    }
    
    handleLikes(e) {
        this.setState({ likes: +1 })
    }
    
    handleUnlikes(e) {
        this.setState({ unlikes: -1 })
    }
    
    render() {
        return (
            <div>
                <textarea></textarea>
                <br />
                <button onClick={this.handleLikes.bind(this)}>Like</button>
                <button onClick={this.handleUnlikes.bind(this)}>Unlike</button>
                <p>{this.state.likes}</p>
                <p>{this.state.unlikes}</p>
                <button>Delete</button>
            </div>
        )
    }
}