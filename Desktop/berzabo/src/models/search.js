const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('Search', {
    search: {
        type: String,  
        required: true,
        trim: true   
    }
})

// Export to other files
module.exports = User