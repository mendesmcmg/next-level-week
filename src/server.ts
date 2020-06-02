import express, { response } from 'express';

const app = express ();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Clara',
        'Lari',
        'Cabrown'        
    ]);
});

app.listen(3333);