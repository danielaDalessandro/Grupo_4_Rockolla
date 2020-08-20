const fs = require('fs');
const path = require('path');
const { throws } = require('assert');

jsonDb = function (tableName) {
    return {
        tablePath: path.join(__dirname, '/../data', tableName + '.json'),

        getNextId() {
            let table;
            try {
                table = this.readAll();
            }
            catch (errors) {
                throw errors;
            }

            if (table.length == 0) {
                return 1;
            }

            let lastId = 1;

            table.forEach(row => {
                if (lastId <= row.id) {
                    lastId = row.id;
                }
            });

            return ++lastId;
        },
        
        readAll() {
            let table;
            try {
                table = fs.readFileSync(this.tablePath, {encoding: 'utf-8'});
            }
            catch (errors) {
                errors.push('readAll()');
                throw error;
            }
            
            return table = JSON.parse(table);
        },
        
        writeTable(rows) {
            rows = JSON.stringify(rows);
            return fs.writeFileSync(this.tablePath, rows);
        },
        
        insert(rows) {
            rows = JSON.stringify(rows);
            try {
                fs.appendFileSync(this.tablePath, rows);
            } 
            catch(errors) {
                return errors;
            }
            return true;
        },
        
        findById(id) {
            let table = this.readAll();
            
            return table.find((row) => row.id == id);
        },
        
        //Devuelve el 1er valor que coincida
        findBy(query, value) {
            let table = this.readAll();
            
            return table.find((row) => row[query] == value);
        },
        
        //Devuelve un array con todos los valores que coincidan
        filterBy(query, value) {
            let table = this.readAll();
            
            return table.filter((row) => row[query] == value);
        },
        
        updateById(id, value) {
            let table = this.readAll();
            let row = this.findById(id);
            let index = table.indexOf(row)
            
            table.splice(index, 1, value);
            
            return this.writeTable(table);
        },

        createRow(row) {
            let table = this.readAll();
            row.id = this.getNextId();

            table.push(row);

            return this.writeTable(table);
        },
    } 
}

module.exports= jsonDb;