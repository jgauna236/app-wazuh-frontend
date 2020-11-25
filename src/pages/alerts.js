import React from 'react';
import AlertService from '../service/alertService';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class AlertComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listAlert: [],
        }
        this.fetchData = this.fetchData.bind(this);
        this.render = this.render.bind(this);
        this.fetchData();
    }

    fetchData(){
        AlertService.getAll().then(
            (json) => this.setState({listAlert: json})
        );
        
    }

    renderCard(alert){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{alert.agent.name + " ("+ alert.agent.ip + ")"}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{alert.rule.description}</Card.Subtitle>
                    <Card.Link href="#">Descripción</Card.Link>
                </Card.Body>
            </Card>
        );
    }

    render(){ 
        return (
        <div>
            {this.state.listAlert.map(alert => this.renderCard(alert._source))}
        </div>
        );
    }

}


export default AlertComponent;