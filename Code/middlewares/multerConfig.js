//multer para trabajar con archivos
const multer = require('multer');
const path = require('path');


module.exports = (dirName) => {
    // configuro el almacenamiento
    const storage = multer.diskStorage({
        destination: path.join(__dirname, '../public/images/', dirName),
        filename: (req, file, callback) => {
            callback(null, 'avatar-' + Date.now() + path.extname(file.originalname))
        }
    })
    // configuro la subida de imagenes
    const upload = multer({ // configuración de multer
        storage: storage,
        fileFilter: (req, file, callback) => {
            // si el archivo es jpeg, jpg o png
            if(['image/jpeg','image/jpg','image/png'].includes(file.mimetype)) {
                return callback(null, true) // lo almaceno
            }
            callback(null, false) // si no, no lo almaceno
        },
        limits:{
            fileSize: 1024 * 1024 // limito el tamaño de los archivos a subir
        }
    })

    return upload;
}