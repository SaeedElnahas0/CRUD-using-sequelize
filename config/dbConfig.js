module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'saeed',
    dialect: 'mysql',

    pool: {
        max: 5, // maximum connection
        min: 0,
        acquire: 30000, 
        idle: 10000 // idle time for db
    },
    logging: false
}