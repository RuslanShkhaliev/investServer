import app from '@/app';
import {connectToDatabase} from './db';

const PORT = process.env.PORT || 8000;


connectToDatabase().then(() => {
    console.log('dawd')
    app.listen(PORT, async () => {
        console.log(`Server listening on port http://localhost:${PORT}`);
    })
})
