import express from 'express' // express import
const app = express() // setup express
const port = 8000 // setting up the port

import db from './config/mongoose.js' //connecting db on load
import router from './routes/index.js' // to use route
import expressLayouts from "express-ejs-layouts" // to use common home
import Todo from './models/addTodo.js' // to add schema data
import bodyParser from 'body-parser' // to parse form data
app.use(bodyParser.urlencoded({extended:true})) // to parse form data
app.set("view engine", 'ejs') // set view engine as ejs
app.set('views', './views') //set viewa path
app.use(expressLayouts) // setup the layout for common page
app.use(express.static('./assets_static')) // setup static pages

// extract styles and scripts from the subpages into the layout
app.set('layout extractStyles', true) 
app.set('layout extractScripts', true)

app.use('/', router) // setup router

// to submit new todo data
app.post('/create-todo', function(req, res){
    
    const dd = Number(req.body.dd)
    const mm = Number(req.body.mm);
    const yyyy = Number(req.body.yyyy);
    const newDateStr = `${yyyy}-${mm.toString().padStart(2, "0")}-${dd.toString().padStart(2, "0")}`;

    const mins = Number(req.body.mins);
    const hrs = Number(req.body.hrs);
    const past = req.body.past;
    const newTimeStr = `${mins.toString().padStart(2, "0")}-${hrs.toString().padStart(2, "0")}-${past}`;
 
    const description = (req.body.descript).trim()
    const category = (req.body.categ)
    
    Todo.create({
        Description:description,
        Category: category,
        DueDate: newDateStr,
        DueTime: newTimeStr
    })
    // catch success
    .then(newContact=>{
        return res.redirect("/");
    })
    // catch error
    .catch(err=>{
        console.log("Error in creating the contact:", err);
        return res.status(500).send("Error in creating the contact");
    })
})

// delete multiple todo
app.get('/delete-todo/', async function(req, res) {
    try {
      // Get the id of the item(s) to be deleted
      let id = req.query.id;
      id = JSON.parse(id);
  
      // Use Promise.all to perform asynchronous deletion for each ID
      const deletePromises = id.map((itemId) => Todo.findByIdAndDelete(itemId));
      await Promise.all(deletePromises);

      // Redirect back to the previous page after all items are deleted
      return res.redirect('back');
    } catch (err) {
      console.log("Error while deleting the todo item(s)", err);
      return res.status(500).send("Error while deleting the todo item(s)");
    }
  });

// initiating the server
app.listen(port, function(err){
    if(err){
        console.log("Issues found while setting up the server. Port:", port)
    }else{
        console.log(`Server starts at: ${port}`)
    }
})