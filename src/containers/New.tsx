import * as React from 'react';


interface INewState{
    content:string
}

interface INewProps{
    // current:string
    // data:string
    // match:any
    addNoteToArr(content:string):void
}


class New extends React.Component<INewProps,INewState>{
    constructor(props:INewProps){
        super(props);
        this.state = {content:''};
    }

    public addNote = (e:any)=>{
        this.props.addNoteToArr(e.target.previousSibling.value);
        // this.setState({notes:this.state.notes.concat({data:this.props.data,
        //         name:"note"+(this.state.notes.length+1)})});
    }

    // public myClicked = (li:string,content:string)=>{
    //     this.props.clicked(li,content);
    // }

    public render() {
        return (
            <div className="new">
                <textarea/>
                <button id="addBtn" onClick={this.addNote}>Add</button>
             </div>
        );
    }
}

export default New;