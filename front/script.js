async function getUser() {

    const data = {email: 'fernandahaubert@gmail.com', password:"123"};

    const response = await fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {"Content-Type":"application/js"},
        body: JSON.stringify(data)
    });

    const resulte = await response.json();

    if(resulte.success) {
        console.log(result.data);
        alert(result.message)
    } else {
        alert(result.message)
    }
}

let call = getUser();