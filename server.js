//Changer les configurations du projet
import 'dotenv/config';

import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

//Cree le server
const app = express();

//Ajout de middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());

//Demarrer le server
console.log('server demarre:');
console.log('http://localhost:' + process.env.PORT);
app.listen(process.env.PORT);

