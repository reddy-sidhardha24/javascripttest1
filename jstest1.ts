const a = Number(req.query.a);
const b = Number(req.query.b);

if (isNaN(a) || isNaN(b) || b === 0) {
    return res.status(400).send('Invalid input');
}

res.json({
    result: a / b
});