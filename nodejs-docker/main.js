const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {
    return response.json({ message: 'hello I am from docker' });
});

app.listen(PORT, () => console.log(`Server running port:${PORT}`));
