import app from './app/app'
import './app/databases';

//este define a donde esta escuchando la app
//nota: si se coloca antes el error es que no permite ningun tipo de llamado
app.listen(app.get('port'));
console.log('server on port', app.get('port'))