import React from 'react';
import AgentService from '../service/agentService'


class AgentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listAgent : []
        }
        this.fetchData = this.fetchData.bind(this);
        this.render = this.render.bind(this);
        this.render();
    }

    fetchData(){
        AgentService.getAll().then(
            (json) => this.setState({listAgent : json})
        );
        
    }
    render(){ 
        this.fetchData();
        return (
        <div>
            {this.state.listAgent}
        </div>
        );
    }

}


export default AgentComponent;