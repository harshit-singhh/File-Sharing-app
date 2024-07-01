const mongoose = require('mongoose');


const fileSchema = mongoose.Schema({
    path: {
        type: String,
        required:true
    },

    name: {
    type: String,
    required:true,
    },
    
    downloadContent : {
        type: Number,
        required: true,
        default : 0
    }
})


// file naame ke collection me store hona chahiye and validate karna head
// FileSchema se
const File = mongoose.model('file', fileSchema);

module.exports = File;