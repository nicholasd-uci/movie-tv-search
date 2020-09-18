const router = require('express').Router()
const axios = require('axios')
const { Media } = require('../models') 

router.get('./ombd/:search', (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${req.params.search}`)
    .then(({ data }) => data.Search.map(media => ({
        title: media.title,
        year: media.Year,
        imbdID: media.imbdID,
        type: media.Type,
        poster: media.Poster
    })))
    .then(apiMedia => Media.find()
        .then(media => apiMedia.filter(data =>
            media.every(dbData => dbData.imbdID !== data.imbdID))))
        .then(media => res.json(media))
        .catch(err => console.log(err))
})
      
module.export = router