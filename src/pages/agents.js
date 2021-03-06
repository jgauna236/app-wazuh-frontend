import React from 'react';
import AgentService from '../service/agentService';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class AgentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listAgent: [],
        }
        this.fetchData = this.fetchData.bind(this);
        this.render = this.render.bind(this);
        this.fetchData();
    }

    fetchData(){
        AgentService.getAll().then(
            (json) => this.setState({listAgent: json})
        );
        
    }

    renderCard(agent){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{agent.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{agent.ip}</Card.Subtitle>
                    <Card.Link href="#">Descripción</Card.Link>
                </Card.Body>
            </Card>
        );
    }

    render(){ 
        return (
        <div>
            {this.state.listAgent.map(agent => this.renderCard(agent))}
        </div>
        );
    }

}


export default AgentComponent;