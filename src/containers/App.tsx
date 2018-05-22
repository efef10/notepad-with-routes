import * as React from 'react';
import '../App.css';
// import Note from '../components/Note';
import Notes from './Notes';
import New from './New';
// import Textarea from '../components/Textarea';
import View from '../components/View';
// import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


interface IAppState {
    content:string
    notes:string[]
}


class App extends React.Component<{},IAppState> {

    constructor(props:{}){
        super(props)
        this.state =
            {content:'',
             notes:[]
            };
    }

    public clicked = (li:string)=>{
        this.setState({content:li});
    }


    public renderNotes = (myMatch:any)=>{
        return <Notes match={myMatch} notes={this.state.notes} clicked={this.clicked} data={this.state.content}/>;
    }

    // public addNoteToChild(){
    //     this.setState({notes:this.state.notes.concat({this.state.content})});
    //             // name:"note"+(this.state.notes.length+1)})},()=>{
    //         console.log("notes:" + this.state.notes);
    //     });
    // }

    public addNoteToArr = (content:string)=>{
        this.setState({content:content},()=>{
            this.setState({notes:this.state.notes.concat(this.state.content)},()=>{
                console.log(this.state.notes[0]);
            });
        });
    }

    public renderNew = ()=>{
        return <New addNoteToArr={this.addNoteToArr}/>;
    }

    public renderEdit = (myMatch:any)=>{
        return (<View match={myMatch.match} content={this.state.content}/>);
    }

    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <ul className='links'>
                            <li><Link to='/notes'>Notes</Link></li>
                            <li><Link to='/new'>New</Link></li>
                            <li><Link to='/'>home</Link></li>
                        </ul>
                        <div className='container'>
                            <h1>My Notepad</h1>
                        </div>


                    </header>
                    <Switch>
                        {/*<Route exact={true} path='/' render={this.renderHello}/>*/}
                        <div>
                            <Route path='/notes' name="notes" render={this.renderNotes}/>
                            <Route path='/new' name="new" component={this.renderNew}/>
                            <Route exact={true} path='/edit/:id' name="edit" component={this.renderEdit}/>
                        </div>


                    </Switch>

                    {/*<Textarea data={this.state.content} onEdit={this.textChange}/>*/}
                </div>
           </BrowserRouter>
        );
    }
}

export default App;
