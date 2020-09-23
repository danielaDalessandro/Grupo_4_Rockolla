module.exports = function(sequelize, dataTypes){
    let alias = "Format";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        inches: {
            type: dataTypes.INTEGER
        }
        
    }
    
    let config = {
        tableName: "Formats",
        timestamps: false
    }

    let Format = sequelize.define(alias, cols, config)
    Format.associate = function(models){
        Format.hasMany(models.Products, {
            as: "products",
            foreignKey: "format_id"
        })
    }
    return Format
}