import React from 'react';
import axios from 'axios';

import { Card } from 'semantic-ui-react';

class Data extends React.Component{
    constructor() {
        super();
        this.state={
            userData: []
        }
    }
    componentDidMount() {
        console.log('CDM running')
        axios.get('http://localhost:5000/api/restricted/data')
            .then(res => {
                console.log(res.data)
                this.setState({ userData: res.data})
            })
            .catch(err => console.log('CDM - error: ', err))
    }
    render() {
        return(
            <div>
                <h2 style={{marginTop: "20px"}}>Now you can see this...</h2>
                {this.state.userData.map(e => 
                <Card centered className="card-container" key={e.name}>
                    <Card.Content>
                        <Card.Header key={e.name}>{e.name}</Card.Header>
                        <Card.Meta key={e.course}>{e.course}</Card.Meta>
                        <Card.Meta key={e.technique}>{e.technique}</Card.Meta>
                        <Card.Description key={e.ingredients}>{e.ingredients.map(i => `${i}, `)}</Card.Description>
                    </Card.Content>
                </Card>)}
                
            </div>
        )
    }
}

export default Data;