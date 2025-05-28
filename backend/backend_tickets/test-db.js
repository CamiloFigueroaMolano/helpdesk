const connection = require('./config/db');

connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error executing test query:', err);
  } else {
    console.log('Test query result:', results[0].solution); // Debe mostrar 2
  }
  connection.end();
});
