import React, { ReactElement } from 'react';
import dotnetify from 'dotnetify';

dotnetify.hubServerUrl = 'http://localhost:5000';
interface State{
    Greetings: string;
    ServerTime: string;
}

export default class HelloWorld extends React.Component<{},State> {
    public constructor(props: Readonly<{}>){
        super(props);
        dotnetify.react.connect('HelloWorld', this);
        this.state = { Greetings: '', ServerTime: '' };
    }

    public render(): ReactElement{
        return (
            <div>
                <p>{this.state.Greetings}</p>
                <p>Server time is: {this.state.ServerTime}</p>
            </div>
        );
    }
}