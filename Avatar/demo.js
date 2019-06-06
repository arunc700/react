import React, { Component } from 'react';
import DemoList from './demoList';

import './demo.css'
import 'tachyons'
 
 

class Demo extends Component {
    constructor() {
        super();
        this.state={name:'Welcome to React'}
    }
    NameChangeEvent(){

        this.setState({name:"Welcome React, You have changed now"})
    }

    render() {
        const arrayList = [
            {
                id: 1,
                name: 'Arun',
                job: 'Web Devoloper'
            },
            {
                id: 2,
                name: 'Mehak',
                job: 'Test develoepr'
            },
            {
                id: 3,
                name: 'Anurag',
                job: 'Java develoepr'
            },
            {
                id: 4,
                name: 'Gaurav',
                job: 'Automation develoepr'
            }

        ];

        const avatarCards = arrayList.map((avatarCard, index) => {
            return <DemoList key={index} id={arrayList[index].id}
                name={arrayList[index].name} job={arrayList[index].job} />
        })

        return (
            <div className="ma3">
                <h2 className="tc">{this.state.name}</h2>
                {avatarCards}
                <br />
                <button onClick={()=> this.NameChangeEvent()}>Nofify Me</button>
            </div>
        )

    }

}

export default Demo
