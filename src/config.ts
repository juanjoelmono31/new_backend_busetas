import { config } from 'dotenv'
config();

export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb+srv://juanjoelmono31:animemanga1816@clusterbusetas.7ndi3xm.mongodb.net/?retryWrites=true&w=majority',
   
}
