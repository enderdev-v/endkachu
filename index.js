const express = require(`express`)
const path = require(`path`)
const app = express()
const BotClient = require(`./server/bot`)

// settings
app.set(`port`, 3000)
app.set(`views`, path.join(__dirname, `views`))
app.engine(`html`, require(`ejs`).renderFile)
app.set(`view engine`, `ejs`)



//static

app.use(express.static(path.join(__dirname, `public`)))

 //routes
app.use(require(`./routes/index`));

app.use((req, res, next) => {
	req.BotClient = BotClient;
	next();
})


// listening

app.listen(app.get(`port`), () => {
	console.log(`Web en el puerto`, app.get(`port`))
})


console.log(`version de node ${process.version} `)
console.log("pagina web prendida")