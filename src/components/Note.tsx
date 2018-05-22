import * as React from 'react';
// import * as BrowserRouter from 'react-router-dom';
import {Link} from 'react-router-dom';


interface INoteProps {
    note:string
    content:string
    clicked(content:string):void
}

interface INoteState {
    content:string
}

class Note extends React.Component<INoteProps,INoteState>{
    constructor(props:INoteProps){
        super(props);
        this.state = {content:this.props.content};
    }

    public myClicked = ()=>{
        this.props.clicked(this.state.content);
    }

    public render(){
        return (
            <div className='noteView'>
                <h3>{this.props.note}</h3>
                <p>{this.state.content.substr(0,30)+(this.state.content.length>30?"...":"")}</p>
                <Link to={'/edit/'+this.props.note}><button onClick={this.myClicked}>view full note ></button></Link>
            </div>
        )
    }
}

export default Note;