const fs = require('fs');
const path = require('path');

//Devuelve un objeto con los métodos necesarios para trabajar con un 
//archivo JSON como si fuera una base de datos.
jsonDb = function (tableName) {
    return {
        //Fijo la ruta del archivo JSON en base al parámetro tableName
        tablePath: path.join(__dirname, '/../data', tableName + '.json'),

        //Obtiene el id correspondiente al proximo elemento de la tabla
        getNextId() {
            let table;
            table = this.readAll();

            //Si la tabla esta vacia, el 1er id será 1
            if (table.length == 0) {
                return 1;
            }

            //Si no busco el mayor id
            let greatesId = 1;
            table.forEach(row => {
                if (greatesId <= row.id) {
                    greatesId = row.id;
                }
            });

            //Devuelvo el id próximo al mayor
            return ++greatesId;
        },
        
        //Lee el archivo y devuelve la tabla
        readAll() {
            //Busco la tabla desde el archivo
            let table;
            try {
                table = fs.readFileSync(this.tablePath, {encoding: 'utf-8'});
            }
            catch (errors) {
                errors.push('readAll()');
                throw error;
            }

            //Parseo la tabla y la devuelvo
            return table = JSON.parse(table);
        },
        
        //Escribe la tabla en el archivo JSON de origen
        writeTable(rows) {
            //Convierto el objeto en string
            rows = JSON.stringify(rows);
            //Escribo el archivo
            return fs.writeFileSync(this.tablePath, rows);
        },
        
        //Devuelve la fila que contenga el id parámetro
        //si no lo encuentra devuelve undefined
        findById(id) {
            let table = this.readAll();
            return table.find((row) => row.id == id);
        },
        
        //Devuelve el 1er valor que coincida según query y value
        findBy(query, value) {
            let table = this.readAll();
            
            return table.find((row) => row[query] == value);
        },
        
        //Devuelve un array con todos los valores que coincidan
        filterBy(query, value) {
            let table = this.readAll();
            
            return table.filter((row) => row[query] == value);
        },
        
        //Actualiza la fila con id igual al del parámetro
        //devuelve el id de la fila actualizada
        update(value) {
            if (!value.id) {
                return undefined;
            }
            let table = this.readAll();
            table = table.filter(row => row.id != value.id); 
            table.push(value);
            this.writeTable(table);

            return value.id;
        },

        //Elimina la fila según el id pasado por parámetro
        //devuelve el id de la fila eliminada
        deleteById(id) {
            let table = this.readAll();
            table = table.filter(row => row.id != id); 
            this.writeTable(table);

            return id;
        },

        //Crea una fila con el objeto recibido por parámetros
        //devuelve el id de la fila creada
        createRow(row) {
            let table = this.readAll();
            row.id = this.getNextId();

            table.push(row);
            this.writeTable(table);

            return row.id;
        },
    } 
}

module.exports= jsonDb;