const Spyce = require('./spyce')
const app = new Spyce()

const api = app.createApi('/api', ()=>{
    console.log('API created')
})

app.listen(3000, ()=>{
    console.log('listening on port: 3000')
})