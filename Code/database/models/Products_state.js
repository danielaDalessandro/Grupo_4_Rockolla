module.exports = function(sequelize, dataTypes){
    let alias = "Products_state";
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
        tableName: "products_state",
        timestamps: false
    }

    let ProductsState = sequelize.define(alias, cols, config)
    return ProductsState
}