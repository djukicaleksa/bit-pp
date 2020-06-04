const userRoutes = (app, fs) => {

    // variables
    const dataPath = "./data/users.json";
    // refactored helper methodes
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = "utf8") => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = "utf8") => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }
            callback();
        }

        )};

        app.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
    // READ


    app.get("/users", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    // CREATE

    //t's quite a simple operation here. 
    //Note that we've changed the app function call to app.post()
    // as this is a POST request to the API server. 
    //The route remains as "/users" 
    //but will hit this method when the request type is a POST.

    app.post("/users", (req, res) => {
        readFile(data => {
            //Counts users in this Object
            const newUserId = Object.keys(data).length + 1;

            // add the new user
            data[newUserId] = JSON.parse(req.body.data);

            writeFile(JSON.stringify(data,null,2), ()=>{
                res.status(200).send("new user added");
            })

        })
    })

    // UPDATE

    app.put("users/:id",(req,res) => {

        readFile(data=>{

            //add the new user
            const userId =req.params["id"];
            data[userId] = JSON.parse(req.body.data);

            writeFile(JSON.stringify(data,null,2), () => {
                res.status(200).send(`users id : ${userId} updated`);
            });
        });
    });

    // DELETE
    app.delete("/users/:id",(req,res) => {

        readFile(data => {
            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data,null,2), ()=>{
                res.status(200).send(`users id : ${userId} - removed`)
            })
        },true);
    });
};


module.exports = userRoutes;