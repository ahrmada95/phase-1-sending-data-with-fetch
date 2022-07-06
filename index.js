const submitData = (userName, userEmail) => {
    const configurationObject = {
        method: "POST", 
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data => {
        let x = document.createElement('h3');
        x.textContent = data.id;
        console.log(x)
        document.body.append(x); 
    })
    .catch((error) => {
        let y = document.createElement('p');
        y.textContent = error.message;
        console.log(error.message);
        document.body.append(y);
    });
}

// // Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Fenrir",
//         dogBreed: "German-Shepard",
//     }),
// };

// fetch("http://localhost:3000/dogs", configurationObject);