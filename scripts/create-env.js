const fs = require('fs')

fs.writeFileSync('./.env', `API=${process.env.API}\nAPI_KEY=${process.env.API_KEY}\n`)