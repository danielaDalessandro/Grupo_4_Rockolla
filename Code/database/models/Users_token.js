module.exports = function(sequelize, dataTypes){
    let alias = "Users_token";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        token: {
            type: dataTypes.STRING
        },
    
    }
    
    let config = {
        tableName: "users_token",
        timestamps: false
    }

    let UsersToken = sequelize.define(alias, cols, config)
    return UsersToken
}