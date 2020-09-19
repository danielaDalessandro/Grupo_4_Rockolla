module.exports = function(sequelize, dataTypes){
    let alias = "Shipping";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        price: {
            type: dataTypes.INTEGER
        },
        
    }
    
    let config = {
        tableName: "shipping",
        timestamps: false
    }

    let Shipping = sequelize.define(alias, cols, config)
    return Shipping
}