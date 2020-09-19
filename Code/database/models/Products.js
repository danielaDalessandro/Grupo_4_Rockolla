module.exports = function(sequelize, dataTypes){
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        publishing_date: {
            type: dataTypes.DATE
        },
        description: {
            type: dataTypes.STRING
        },
        views: {
            type: dataTypes.INTEGER
        },
        cover: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER
        }


    }
    
    let config = {
        tableName: "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.Format, {
            as: "format",
            foreignKey: "format_id"
        })

        Product.belongsTo(models.Artist, {
            as: "artist",
            foreignKey: "artist_id"
        })

        Product.belongsTo(models.Label, {
            as: "label",
            foreignKey: "label_id"
        })

        Product.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        })

        Product.belongsTo(models.ProductsState, {
            as: "products_state",
            foreignKey: "products_state_id"
        })
    }

    return Product
}