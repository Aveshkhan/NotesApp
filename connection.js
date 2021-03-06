const mongoose = require('mongoose');

//connect with db
mongoose.connect('mongodb://localhost/NotesApp', {useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('error is', error);
});