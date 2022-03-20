const server = "http://127.0.0.1:8000"


function post_login() {

    const email = document.getElementById("input-email").value;
    const password = document.getElementById("input-password").value;
    const bodyPayload = JSON.stringify({email: email, password: password});
    axios.post(server + '/login', bodyPayload, {
            headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            console.log(resp.data);
            alert(JSON.stringify(resp.data));
            // TODO: do something after login
            
            if (resp.data.successful) {
                get_shipments()
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


function get_shipments() {
    axios.get(server + '/get-shipments')
    .then(resp => {
        console.log(resp.data);
        alert(JSON.stringify(resp.data));
        // TODO: do something after login
    })
    .catch(function (error) {
        console.log(error);
    });
}
