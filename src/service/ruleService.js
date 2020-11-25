
class RuleService {



    getAll() {
        return fetch('http://localhost:8000/rules/all')
        .then(response => {return response.json();})
        .catch(function(error) {
            console.log(error);
        });
    }

}

export default new RuleService();