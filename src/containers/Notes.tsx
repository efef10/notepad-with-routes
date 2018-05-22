import * as React from 'react';
import Note from '../components/Note';


interface INotesState{
    notes:INote[]
}

interface INotesProps{
    // current:string
    data:string
    match:any
    clicked(content:string):void
    notes:string[]
    // addNote():void
}


interface INote {
    data:string
    name:string
}

class Notes extends React.Component<INotesProps,INotesState>{
    constructor(props:INotesProps){
        super(props);
        this.state = {notes:[]};
    }

    // public addNote = this.props.addNote.bind(this);
        // this.setState({notes:this.state.notes.concat({data:this.props.data,
        //         name:"note"+(this.state.notes.length+1)})},()=>{
        //     console.log("notes:" + this.state.notes);
        // });

    // public myClicked = (li:string,content:string)=>{
    //     this.props.clicked(li,content);
    // }


    public render(){
        const list = this.props.notes.map((note,idx)=>{
            return <Note clicked={this.props.clicked} key={idx} note={"note"+(idx+1)} content={note}/>
        });
        return (
            <div>
                <ul className="myNotes">{list}</ul>
                {/*<button id="addBtn" onClick={this.addNote}>Add</button>*/}
            </div>
        );
    }
}

export default Notes;