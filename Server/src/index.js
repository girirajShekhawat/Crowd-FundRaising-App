import 'dotenv/config'
import app from "./server.js";
import connectDb from "./db/mongoose.js";
const port =process.env.PORT||8000;
 



connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is up and running on the ${port}`)
    }
    )
}
).catch((Error)=>{
    console.log("Error==","Error in Index file",Error)
}
)