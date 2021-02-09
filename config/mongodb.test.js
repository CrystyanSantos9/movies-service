const test = require('tape');
const mongodb = require('./mongodb');

function runTests(){
    test('MongoDb Connection', (t)=>{
        mongodb.connect((err, conn)=>{
            t.assert(conn,"Connection estabilished");
            t.end();
        })
    })

    test('MongoDb Diconnection', (t)=>{
        t.assert(mongodb.disconnect(), "Disconnected");
        t.end();
    })
}

module.exports = {runTests}