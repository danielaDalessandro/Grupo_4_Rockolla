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
    UsersToken.associate = function (models){
        UsersToken.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        })
    }
    return UsersToken
}