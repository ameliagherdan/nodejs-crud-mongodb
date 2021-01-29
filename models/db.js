const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser:true,useUnifiedTopology: true}, (err) =>{
    if(!err) {
        console.log('MongoDB Connection Succeded.') }
        else {
            console.log('Error in database connection:' +err)
        }   
});

require('./employee.model')