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
        todos.push({id: uuidv4(), todo: `rando string ${num++}`, status: 'AVAILABLE'});

        return res(ctx.status(201));
    })
]
