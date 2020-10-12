const {check} = require('express-validator');


module.exports = {
    productForm: [
        check("titulo", "Verifique el título ingresado")
            .trim()
            .isLength({min: 5, max:50})
            .escape(),

        check("artista", "Verifique el artista ingresado")
            .trim()
            .isLength({min: 2, max:100})
            .escape(),

        check("sello", "Verifique el sello ingresado")
            .trim()
            .isLength({min: 2, max:100})
            .escape(),

        check("genero", "Verifique el genero ingresado")
            .trim()
            .isLength({min: 2, max:50})
            .escape(),

        check("fechaPublicacion", "Verifique la fecha ingresada")
            .trim()
            .isBefore()
            .escape(),

        check("precio", "Verifique el precio ingresado")
            .trim()
            .isNumeric()
            .escape(),

        check("stock", "Verifique el stock ingresado")
            .trim()
            .isInt()
            .escape(),

        check("formato", "Verifique el formato ingresado")
            .trim()
            .isLength({min: 1, max:50})
            .escape(),

        check("pulgadas", "Verifique las pulgadas ingresadas")
            .trim()
            .isInt()
            .escape(),

        check("rpm", "Verifique las revoluciones ingresadas")
            .trim()
            .isInt()
            .escape(),

        check("descripcion", "Verifique la descripción ingresada")
            .trim()
            .isLength({min: 20, max:500})
            .escape(),
    ]
}