const express = require('express');
const app = epxpress();

app.get('/', (req, rest)=> {
	res.send({'hi': 'there'})
});

app.listen(5000);