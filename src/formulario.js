
const form = document.querySelector('#form');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const direccion = document.querySelector('#direccion');
const btnForm = document.querySelector('#btn-form');

let data;

const dataBase = (name, value) => {
    data = name, value;
    
}

nombre.addEventListener('change', e => {   

    dataBase({
        ...data,
        [e.target.name]:e.target.value
    })

    if(e.target.value.trim() === ''){
        console.log('Debe llenar el nombre');
    } 
});

apellido.addEventListener('change', e => {

    dataBase({
        ...data,
        [e.target.name]:e.target.value
    })

    if(e.target.value === ''){
        console.log('Debe llenar el apellido');
    }
});
telefono.addEventListener('change', e => {

    dataBase({
        ...data,
        [e.target.name]:e.target.value
    })

    if(e.target.value === ''){
        console.log('Debe llenar el telefono');
    }
});


direccion.addEventListener('change', e => {

    dataBase({
        ...data,
        [e.target.name]:e.target.value
    })

    if(e.target.value === ''){
        console.log('Debe colocar la direccion');
    }
});


form.addEventListener('submit', e => {
    e.preventDefault();

    localStorage.setItem(('Datos'), JSON.stringify(data));

    alert(`Se lleno los datos correctamente Sr. ${data.nombre} ${data.apellido}`);
    window.location.reload();
})
