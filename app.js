console.log("Hola");

const API_KEY_OPENIA = process.env.API_KEY

const API_KEY = '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'

//Funcion para llamar al metodo POST de la API 
function getCompletion(){
    fetch('https://api.openai.com/v1/completions',{
        method: 'POST',
        headers:{
            'Content-Type': 'aplication/json',
            'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
        })
    })
}

