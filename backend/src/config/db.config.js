module.exports = {
    HOST: "mysqldb",
    USER: "root",
    PASSWORD: "123456",
    DB: "TodoDB",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};