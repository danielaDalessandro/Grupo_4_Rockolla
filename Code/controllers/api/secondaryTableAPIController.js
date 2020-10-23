const db = require("../../database/models");

module.exports = function build(tableName) {
  return {
    // Listar todas las filas de la tabla tableName
    list: async (req, res) => {
      let data = await db[tableName].findAll({
        raw: true,
      });

      data.forEach((element) => {
        delete element.createdAt;
        delete element.deletedAt;
        delete element.updatedAt;
      });
      let respuesta = {
        meta: {
          status: 200,
          total: data.length,
        },
        data,
      };
      return res.json(respuesta);
    },

    // Detalle de la fila de la tabla tableName con id por parametro
    detail: async (req, res) => {
      let data = await db[tableName].findByPk(req.params.id, {
        raw: true,
      });

      delete data.createdAt;
      delete data.deletedAt;
      delete data.updatedAt;

      let respuesta = {
        meta: {
          status: 200,
        },
        data,
      };
      return res.json(respuesta);
    },
  };
};
