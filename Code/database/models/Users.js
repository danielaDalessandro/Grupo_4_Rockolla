module.exports = function(sequelize, dataTypes){
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        email: {
            type: dataTypes.STRING
        },
        f_name: {
            type: dataTypes.STRING
        },
        l_name: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        street: {
            type: dataTypes.STRING
        },
        number: {
            type: dataTypes.INTEGER
        },
        city: {
            type: dataTypes.STRING
        },
        department: {
            type: dataTypes.STRING
        },
        zipcode: {
            type: dataTypes.INTEGER
        },
        province: { 
            type: dataTypes.STRING
        }


    }
    
    let config = {
        tableName: "users",
        timestamps: false
    }

    let Users = sequelize.define(alias, cols, config)
    return Users
}