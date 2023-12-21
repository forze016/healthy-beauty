const server = require('./src/server')
const PORT = 3001
const { connection } = require('./src/db')


connection.sync({force: true, alter: true}).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Server listen on port ${PORT}`);
    })
})
