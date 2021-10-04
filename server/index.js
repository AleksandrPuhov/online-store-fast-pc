require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

// app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
	console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
