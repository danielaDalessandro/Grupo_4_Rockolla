module.exports = function(sequelize, dataTypes){
    let alias = "Artists";
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
        tableName: "artists",
        timestamps: false
    }

    let Artist = sequelize.define(alias, cols, config)
    Artist.associate = function(models){
        Artist.hasMany(models.Products, {
            as: "product",
            foreignKey: "artist_id"
        })
    }
    return Artist
}