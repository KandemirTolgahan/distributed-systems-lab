module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("Task", {
        todo: {
            type: Sequelize.STRING
        },
        priority: {
            type: Sequelize.INTEGER
        }
    });
    return Task;
};