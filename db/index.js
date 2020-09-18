module.export = require('mongoose').connect('mongodb://local/media_db', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})