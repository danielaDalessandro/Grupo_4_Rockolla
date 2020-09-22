module.exports = function(sequelize, dataTypes){
    let alias = "Users_state";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        
    }
    
    let config = {
        tableName: "users_state",
        timestamps: false
    }

    let usersState = sequelize.define(alias, cols, config)
    usersState.associate = function(models){
        usersState.hasMany(models.User, {
            as: "users",
            foreignKey: "state_id"
        })
    }
    
    return usersState
}