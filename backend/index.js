import express from 'express'
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv'
import problems from './questions.js'
import auth from './midddleware.js';

dotenv.config();

const app = express();
const USERS = [];
let userCount = 1;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.json(USERS)
})

app.get('/me', auth, (req, res) => {
    const user = USERS.find(x => x.id === req.userId);
    if (!user)
        return res.json({ msg: "Please login" })
    else
        res.json({ email: user.email, id: user.id, username: user.username })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = USERS.find(x => x.email === email);
    if (email !== undefined && password !== undefined) {

        if (!user) {
            return res.status(401).json({ msg: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ msg: "Incorrect password" });
        }
        if (user.password === password) {
            console.log(process.env.JWT_SECRET)
            const token = jwt.sign({
                id: user.id,
            }, process.env.JWT_SECRET)
            return res.json({ token, email: email })
        }
    }
    res.status(403).json({ msg: 'enter email and password' })
});

app.post('/signup', (req, res) => {
    const { email, password, username } = req.body;
    const user = USERS.find(x => x.email === email)
    if (user) {
        return res.json({ msg: 'User already exist' })
    } else {
        // store in database;
        USERS.push({ email, password, username, id: userCount++ })
        res.status(201).json({ msg: 'sign up sucessfull' })

    }
});

app.get('/problems', (req, res) => {
    const filteredProblems = problems.map(x => ({
        problemId: x.problemId,
        title: x.title,
        difficulty: x.difficulty,
        acceptance: x.acceptance
    }))
    res.json({
        problems: filteredProblems
    })
});

app.get('/problems/:id', (req, res) => {
    const id = req.params.id;
    const problem = problems.find(x => x.problemId === id);

    res.json({ problem });
});

app.post('/submit', (req, res) => {
    const {answer , id} = req.body;
    console.log(id, answer);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})