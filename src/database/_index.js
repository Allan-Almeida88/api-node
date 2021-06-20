const pg = require('pg')

const cliente = pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'db_test',
    password: 'postgres',
    port: 5432,
})

module.exports = cliente

// const Client = require('pg').Client
// const cliente = new Client({
//     user: "postgres",
//     password: "postgres",
//     host: "127.0.0.1",
//     port:5432,
//     database: "db_test"
// });

// cliente.connect();
// hora_servidor = cliente.query("select * from cliente").then(result => {

//     const resultado = result.rows;
//     // console.log(resultado);
// }).finally(() => cliente.end());

// getClientes();

// async function getClientes() {
//     try {
//         console.log('Iniciando conexão');
//         await cliente.connect();
//         console.log('Conexão bem sucedida!');
//         const resultado = await cliente.query("select * from cliente")
//         console.log(resultado.rows)
//     } catch (e) {
//         console.log('Erro na consulta', e)
//     } finally {
//         await cliente.end()
//         console.log('Encerrando conexão')
//     }
// }