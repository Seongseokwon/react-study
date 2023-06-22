import { rest } from 'msw';

const todos = [{id: 1, todo: '먹기'},{id: 2, todo: '자기'},{id: 3, todo: '놀기'},{id: 4, todo: '운동'},{id: 5, todo: '공부'}];

export const handlers = [
    rest.get('/todos', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
    })
]
