const router = require("express").Router()

router.get("/", (req, res, next) => {
	res.json("All good in here")
})

router.get("/about", (req, res, next) => {

	console.log(`Hello!`);

  console.log(req);

  res.status(404).json({message: `just for lols..`});

})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
