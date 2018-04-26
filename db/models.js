const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize( "QandA", "QandAUser", "QandAPass", {
    dialect: 'mysql'
})

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

const QuesBank = db.define('quesbank', {
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ques: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    answer: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    User,
    QuesBank
}