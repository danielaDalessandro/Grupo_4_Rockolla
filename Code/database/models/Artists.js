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
    return Artist
}