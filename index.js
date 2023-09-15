const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api to MyCV <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next) => {
	res.sendfile("assets/workExperience.json");
});

app.get('/skills-competencies', (req, res, next) => {
	res.sendfile("assets/skillsCompetencies.json");
});

app.get('/achievements-certificates', (req, res, next) => {
	res.sendfile("assets/achievementsCertificates.json");
});

app.get('/interest', (req, res, next) => {
	res.sendfile("assets/interests.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));


