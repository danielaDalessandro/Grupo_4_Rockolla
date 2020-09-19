module.exports = function(sequelize, dataTypes){
    let alias = "Genres";
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
        tableName: "genres",
        timestamps: false
    }

    let Genre = sequelize.define(alias, cols, config)
    return Genre
}