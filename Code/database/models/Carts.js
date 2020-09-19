module.exports = function(sequelize, dataTypes){
    let alias = "Carts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        date: {
            type: dataTypes.DATETIME
        },
        total: {
            type: dataTypes.INTEGER
        },
    

    }
    
    let config = {
        tableName: "carts",
        timestamps: false
    }

    let Cart = sequelize.define(alias, cols, config)
    return Cart
}