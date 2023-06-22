import {rest} from 'msw';
import {v4 as uuidv4} from 'uuid';

const todos = [
    {id: 1, todo: '먹기', status: 'AVAILABLE'},
    {id: 2, todo: '자기', status: 'COMPLETED'},
    {id: 3, todo: '놀기', status: 'AVAILABLE'},
    {id: 4, todo: '운동', status: 'AVAILABLE'},
    {id: 5, todo: '공부', status: 'COMPLETED'}
];
let num = 0;
export const handlers = [
    rest.get('/todos', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
    }),

    rest.post('/todo', (req, res, ctx) => {
        console.log(req.body);
        const data = req.body;

        todos.push({id: data.id, todo: data.todo, status: 'AVAILABLE'});

        return res(ctx.status(201));
    }),

    rest.delete('/todo', (req, res, ctx) => {

        return res(ctx.status(200));
    })
]

