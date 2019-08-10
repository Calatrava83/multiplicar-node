const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
        }
        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un número`)
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        console.log('======================='.green);
        console.log(`======Tabla del ${base}======`.green);
        console.log('======================='.green);
        resolve(`${data}`);
    })
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un número`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/table-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`table-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}