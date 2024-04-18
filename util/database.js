const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog-post','root','Aniket123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;