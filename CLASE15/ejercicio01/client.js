const net = require ('net');
const client = net.createConnection({port: 3000}, () =>{
    console.log('Conectando al servidor');
    client.write('Hola servidor');
});
client.on('data', (data) =>{

})
client.on ('data', (data) =>{ 
    console.log(data.toString()); 
    client.end() 
});
client.on('error', (err) => { 
    console.log('Error:', err.message);
});

client.on('end', () =>{ 
    console.log('\nDesconectando del servidor...');
});