module.exports = function(sequelize, dataTypes){
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        date: {
            type: dataTypes.DATE
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
    
    Cart.associate = function(models){
        Cart.belongsTo(models.Shipping, {
            as: "shipping",
            foreignKey: "shipping_id"
        })

        Cart.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        })
        Cart.belongsTo(models.Carts_state, {
            as: "carts_state",
            foreignKey: "state_id"
        })

        Cart.hasMany(models.Products_cart, {
            as: "products_cart",
            foreignKey: "cart_id"
        })

    }
    return Cart
}