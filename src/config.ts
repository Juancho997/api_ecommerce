import 'dotenv/config'


export default{
    MONGO_DATABASE:process.env.MONGO_DATABASE || "",
    MONGO_USER:process.env.MONGO_USER || "",
    MONGO_PASSWORD:process.env.MONGO_PASSWORD || "",
    MONGO_HOST:process.env.MONGO_HOST || "localhost",
    SECRET_JWT : 'secret' 
}