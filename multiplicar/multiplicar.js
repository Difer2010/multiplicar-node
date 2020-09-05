const fs = require('fs');
const colors = require('colors')
    //module.exports.creararchivo

let listartabla = (base, limite) => {
    console.log("=============================".green);
    console.log(`=========tabla del ${ base }=========`.blue);
    console.log("=============================".green);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} No es un numero`);
            return
        } else {
            if (!Number(limite)) {
                reject(`El valor de ${limite} no es un numero`)
            } else {
                let data = ''
                for (let i = 1; i <= limite; i++) {
                    let m = base * i;
                    data += `${base} x ${i} = ${m}\n`
                }
                resolve(console.log(data))
            }
        }
    })
}





let creararchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} No es un numero`);
            return
        }
        let data = ''

        for (let i = 1; i <= limite; i++) {
            let m = base * i;
            console.log(`${base} x ${i} = ${m}`);
            data += `${base} x ${i} = ${m}\n`
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla${base}.txt`);
        });

    })
}

module.exports = {
    creararchivo,
    listartabla
}