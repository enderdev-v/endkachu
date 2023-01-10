const express = require("express")
const router = express.Router();
const client = require(`../server/bot`)

router.get(`/`, (req, res) => {
	res.render(`index.html`, { guild: `${client.guilds.cache.size}`})
})




module.exports = router;