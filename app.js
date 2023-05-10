const express = require('express')
const bodyparser = require('body-parser')
const date = require(__dirname+'/date.js')
const app = express()

const tasks = [""]
const workitems = [""]

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', function(req, res){
    let day = date.getdate()
    res.render('list', {listtitle: day,newlistitems: tasks})
})
app.post('/', function(req, res){
    let task = req.body.tasklist
    if (req.body.list === "Work"){
        workitems.push(task)
        res.redirect('/work')
    }
    else{
        tasks.push(task)
        res.redirect('/')
    }
    
})
app.get('/work', function(req, res){
    res.render('list',{listtitle:'Work List',newlistitems:workitems})
})
app.get('/about', function(req, res){
    res.render('about')
})

app.listen(3000, function () {  
    console.log('Listening on port 3000')
})