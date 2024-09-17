import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import testRoute from './routes/test.route.js';
import authRoute from './routes/auth.route.js';
import certificateRoute from './routes/certificate.route.js';
import lectureRoute from './routes/lecture.route.js';
import minicourseRoute from './routes/minicourse.route.js';
import productRoute from './routes/product.route.js';
import subscriptionRoute from './routes/subscription.route.js';
import userRoute from './routes/user.route.js';

const app = express();

app.set('view engine', 'ejs');

// Configuração de CORS (deve vir antes das rotas)
// app.use(cors({credentials: true}));

app.use(cors({
    origin: ['https://test-api-ten-pink.vercel.app/', 'http://localhost:5173', 'https://main--wtisc.netlify.app', 'https://main--wtisca.netlify.app', 'https://main--wtiscc.netlify.app/', 'https://wtisc2.netlify.app', 'https://wtisc-teste-front.vercel.app', 'https://wtisc-project-front-production.up.railway.app', 'https://wtisc.vercel.app'], // Adicione seus domínios
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


// app.use(cors());

// app.use(cors({
//     origin: 'https://test-api-ten-pink.vercel.app',
//     methods: 'GET, POST, PUT, DELETE', // Métodos HTTP permitidos
//     credentials: true, // Permite envio de cookies
//   }));


// Middlewares
app.use(express.json());
app.use(cookieParser());

// ROTAS
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/minicourses', minicourseRoute);
app.use('/lectures', lectureRoute);
app.use('/subscriptions', subscriptionRoute);
app.use('/products', productRoute);
app.use('/certificates', certificateRoute);

// Rota principal
app.get('/', (req, res) => {
    res.send('rota home funcionando!');
});

const port = process.env.PORT || 8800;
// Inicia o servidor
app.listen(port, () => {
    console.log('Servidor rodando na porta 8800');
});
