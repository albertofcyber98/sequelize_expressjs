const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'dfvgup6vipnsuc',
    host: 'ec2-34-194-171-47.compute-1.amazonaws.com',
    username: 'lnpoooqphxohwe',
    password: 'a2a1e1944d7cebd8c5101d54bb634b4e5391d0c3b52c9d93e86bee5a0a6e2bda',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {rejectUnauthorized: false}
    }
});

(async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;