const formulario = document.getElementById('form');

formulario.addEventListener("submit", (x) => {
    x.preventDefault();

    const datos = document.getElementById('datos');
    const name = document.getElementById('name').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contra').value;

    const Registro = {
        name, 
        email, 
        password, 
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(Registro),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))

    console.log(Registro)

    datos.innerHTML = "Nombre " + Registro.name + " <br> Email " + Registro.email + " <br> Contraseña " + Registro.password
})