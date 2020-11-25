import React from 'react';
import RuleService from '../service/ruleService';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class RuleComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listRule: [],
        }
        this.fetchData = this.fetchData.bind(this);
        this.render = this.render.bind(this);
        this.fetchData();
    }

    fetchData(){
        RuleService.getAll().then(
            (json) => this.setState({listRule: json})
        );
        
    }

    description(rule){
        JSON.stringify(rule);
    }

    renderCard(rule){
        return (
            <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{rule.description}</Card.Subtitle>
                    <Card.Link href={this.description(rule)}>Descripción</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }

    render(){ 
        return (
        <div>
            {this.state.listRule.map(rule => this.renderCard(rule))}
        </div>
        );
    }

}


export default RuleComponent;