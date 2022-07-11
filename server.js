const express = require('express');
const app = express();
const cors = require('cors')


let corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions))


app.set('port', process.env.PORT || 3200)  

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const db = require("./app/models")
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
      console.log("Connected To Database 'MongoDB'")
  })
  .catch(err => {
      console.log("Cannot connect to the database", err);
      process.exit()
  })

  require("./app/routes/programs.routes")(app)


app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})