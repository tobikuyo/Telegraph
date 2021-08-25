const app = require('./server');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Express departed from port ${port}`));
