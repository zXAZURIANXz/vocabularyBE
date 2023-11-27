
const model = require('../models/word');

const { Word } = require('../models/word')

/**
 * Obtener DATA de palabras
 */

exports.getData = async (req, res) => {
    
    try {
      const words = await Word.find();
      res.json({ words });
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'Hubo un error al obtener los datos' });
    }
};

/**
 * Enviar Nueva Palbra
 */

exports.sendData = async (req, res) => {
  try {
    const data = req.body;
    const{word,meaning,usexample} = data
    Word.create({
      word,
      meaning,
      usexample,
    })
    res.send({ message: 'Datos recibidos correctamente' });
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Hubo un error al insertar los datos' });
  }
};