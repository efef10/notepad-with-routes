import * as React from 'react';

interface IEditProps{
    match:any
    content:string
}

class View extends React.Component<IEditProps,{}>{
    constructor(props:IEditProps){
        super(props);
        this.state = {content:''};
    }

    public render(){
        return(
            <div className='view'>
                <h3>view {this.props.match.params.id}</h3>
                <textarea value={this.props.content}/>
            </div>
        );
    }
}

export default View;