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

    productCart.associate = function(models){
        productCart.belongsTo(models.Products, {
            as: "product",
            foreignKey: "product_id"
        })
    productCart.belongsTo(models.Cart, {
        as: "cart",
        foreignKey: "cart_id"
    })

    }
    return productCart
}