module.exports = function(sequelize, dataTypes){
    let alias = "Products_cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        }



    }
    
    let config = {
        tableName: "products_cart",
        timestamps: false
    }

    let productCart = sequelize.define(alias, cols, config)
    return productCart
}