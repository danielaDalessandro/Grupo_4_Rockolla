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
    Shipping.associate = function(models){
        Shipping.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "shipping_id"
        })
    }
    return Shipping
}