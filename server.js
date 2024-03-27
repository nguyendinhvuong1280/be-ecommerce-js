const app = require("./src/app");
const { app: { port } } = require('./src/configs/config.mongodb')
const PORT = port || 3056;

const server = app.listen(PORT, () => {
    console.log(`WSV eComerece start with ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))

    process.exit();
})