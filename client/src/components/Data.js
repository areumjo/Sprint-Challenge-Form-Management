import React from 'react';
import axios from 'axios';

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
                <h2>Now you can see this...</h2>
                {this.state.userData.map(e => 
                <div>
                    <h2 key={e.name}>{e.name}</h2>
                    <h3 key={e.course}>{e.course}</h3>
                    <h2 key={e.technique}>{e.technique}</h2>
                    <p key={e.ingredients}>{e.ingredients.map(i => `${i}, `)}</p>
                </div>)}
                
            </div>
        )
    }
}

export default Data;