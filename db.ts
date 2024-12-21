import mongoose from "mongoose"

const connect = async()=>{
    const DBUrl = "mongodb+srv://nayanhetc61:nayan@cluster0.pxtec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(DBUrl)
    .then(()=>console.log("DB connected Successfully"))
    .catch((e)=>console.log(e))
}
export default connect;