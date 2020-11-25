
class AgentService {



    getAll() {
        return fetch('http://localhost:8000/agents/all')
        .then(response => {return response.json();})
        .catch(function(error) {
            console.log(error);
        });
    }

}

export default new AgentService();