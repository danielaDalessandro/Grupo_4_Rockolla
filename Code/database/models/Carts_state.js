module.exports = function(sequelize, dataTypes){
    let alias = "Carts_state";
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
        tableName: "carts_state",
        timestamps: false
    }

    let cartsState = sequelize.define(alias, cols, config)
    
    cartsState.associate = function(models){
    cartsState.hasMany(models.Cart, {
        as: "cart",
        foreignKey: "state_id"
    })
    }
    return cartsState
}