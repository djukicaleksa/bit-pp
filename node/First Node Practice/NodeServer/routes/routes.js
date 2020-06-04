// load up our shiny new route for users
const userRoutes = require("./users");


const appRouter = (app,fs) =>
{
        app.get("/",(req,res)=>{
            res.send("Welcome to the development API - SERVER");
        });
        userRoutes(app,fs);
}
module.exports=appRouter;