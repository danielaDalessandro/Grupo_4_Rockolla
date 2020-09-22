module.exports = function(sequelize, dataTypes){
    let alias = "User";
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

    let User = sequelize.define(alias, cols, config)
    User.associate = function(models){
        User.belongsTo(models.Users_state, {
            as: "user_state",
            foreignKey: "state_id"
        })
    
        User.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "user_id"
        })

        User.hasMany(models.Users_token, {
            as: "users_token",
            foreignKey: "user_id"
        })
    }
    return User
}