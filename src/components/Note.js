import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
       super(props); 
       this.state = { likes: 0, note: ''}
    }
    
    handleLikes() {
        const count = this.state.likes + 1;
        this.setState({ likes: count })
    }
    
    handleUnlikes() {
        const count = this.state.likes - 1;
        this.setState({ likes: count })
    }
    
    saveNote(e) {
        const text = e.target.value;
        this.setState({ note: text });
    }
    
    render() {
        return (
            <div>
                <textarea ref="text" onChange={this.saveNote.bind(this)}></textarea>
                <p>{this.state.note}</p>
                <button onClick={this.handleLikes.bind(this)}>Like</button>
                <button onClick={this.handleUnlikes.bind(this)}>Unlike</button>
                <p>{this.state.likes}</p>
                <button>Delete</button>
            </div>
        )
    }
}