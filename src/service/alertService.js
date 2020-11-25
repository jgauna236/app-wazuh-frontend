
class AlertService {



    getAll() {
        return fetch('http://localhost:8000/alerts/all')
        .then(response => {return response.json();})
        .catch(function(error) {
            console.log(error);
        });
    }

}

export default new AlertService();