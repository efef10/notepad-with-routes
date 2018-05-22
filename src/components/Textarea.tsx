import * as React from 'react';

interface ITextAreaProps{
    data:string
    onEdit(e:any):void
}

class Textarea extends React.Component<ITextAreaProps,{}> {
    constructor(props: ITextAreaProps) {
        super(props);
    }

    // public fn= this.props.onEdit.bind(this);

    public render() {
        return (<textarea onChange={this.props.onEdit} value={this.props.data}/>);
    }
}

export default Textarea;
