const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Erlauben Sie CORS-Anfragen von jedem Ursprung
app.use(express.json()); // Body-Parser Middleware, um JSON-Daten zu verarbeiten

// MySQL-Datenbankverbindung mit einem Pool konfigurieren
const pool = mysql.createPool({
  connectionLimit: 10, // Maximale Anzahl von Verbindungen im Pool
  host: 'container3_sql',
  user: 'root', // Hinweis: Verwenden Sie in der Produktion keinen Root-Zugang
  password: 'password', // Ersetzen Sie dies    durch Ihr gewähltes Passwort
  database: 'ticketsystem'
});

app.post('/ticket', (req, res) => {
  const { email, name, tel, helpTopic, summary, description } = req.body;

  // Hier sollten Sie eine Datenvalidierung hinzufügen

  const query = 'INSERT INTO tickets (email, name, tel, helpTopic, summary, description) VALUES (?, ?, ?, ?, ?, ?)';
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Fehler beim Verbinden mit der Datenbank: ', err);
      res.status(500).send('Datenbankverbindungsfehler');
      return;
    }
    
    connection.query(query, [email, name, tel, helpTopic, summary, description], (error, results) => {
      connection.release(); // Verbindung zurück in den Pool geben

      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json({ message: 'Ticket erfolgreich eingereicht', ticketId: results.insertId });
    });
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
