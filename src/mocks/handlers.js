import {rest} from 'msw';

let todos = [
    {id: 1, todo: '먹기', completed: false},
    {id: 2, todo: '자기', completed: true},
    {id: 3, todo: '놀기', completed: false},
    {id: 4, todo: '운동', completed: false},
    {id: 5, todo: '공부', completed: true}
];
let num = 0;
export const handlers = [
    rest.get('/todos', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
    }),

    rest.post('/todo', (req, res, ctx) => {
        const data = req.body;

        todos.push({id: data.id, todo: data.todo, completed: false});

        return res(ctx.status(201));
    }),

    rest.patch('/todo', (req, res, ctx) => {
      const data = req.body;

      todos = todos.map(t => t.id === data.id ? {...t, completed: !t.completed} : t);
      return res(ctx.status(400));
    }),

    rest.delete('/todo', (req, res, ctx) => {
        const data = req.body;
        todos = todos.filter(t => t.id !== data.id);
        return res(ctx.status(200));
    })
]

