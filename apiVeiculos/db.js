async function connect() {
	const mysql = require ("mysql2/promise");
	const connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
        database: "veiculos"
	});
    console.log("Conectou no MySQL");
    global.connection = connection;
    return connection;
}

async function selectCars() {
    data = {};
    const conn = await connect();
    data = await conn.query('SELECT * FROM veiculos;');
    return data[0];
}


module.exports = {selectCars}