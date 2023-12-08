# Einfaches Ticketsystem mit Docker


## Systemvoraussetzungen

- Docker Desktop


## Installation

1. Klonen sie das repository in den von ihnen gewünschten Ordner mit dem befehl
   ```
   git clone https://github.com/iliakalygin/Ticketsystem-Docker
   ```
3. Wechslen Sie in den Ticketsystem Ordner mit dem Befehl
   ```
   cd Tickersystem-Docker\Ticketsystem
   ```
  Dies kann auch über die Grafische oberfläche des File Explorers getan werden.

## Container Starten

1. Um die Container zu starten muss die Docker-Compose Datei ausgeführt werden:
   ```
   docker-compose up --build
   ```
3. Unter den folgenden Ports werden nun das Front- und Datanbank gestartet:
    
   Frontend (Webseite): ```http://localhost:80```
 
   Datanbank (SQL): ```http://localhost:3000```
    
5. Die Website kann unter dem Port 80 geöffnet werden:
   ```
   http://localhost:80
   ```

## Daten aus der Datenbank auslesen.

Um die Daten jetzt aus der Datenbank auslesen zu können, sind folgende befehle in einem neuen Terminal auszuführen:

1. Um alle laufenden Docker Prozesse anzuzeigen:
   ```
   docker ps
   ```
3. Kopieren Sie die ID vom Container 3 SQL
4. Starten Sie SQL mit der kepierten ID:
   ```
   docker exec -it KOPIERTE_SQL_ID mysql -u root -p
   ```
5. Das Passowrd für die Datenbank lautet:
   ```
   password
   ```
6. Nun sind Sie in der Datenbank. Um alle Datenbanken anzeigen zu lassen führen Sie aus:
   ```
   SHOW DATABASES;
   ```
7. Die Datenbank in der die Daten gespeichert werden heisst `ticketsystem`. Wir müssen nun auf Sie wechseln mit:
   ```
   USE ticketsystem; 
   ```
8. Alle Tabellen in der Datenbank anzeigen:
   ```
   SHOW TABLES;
   ```
9. Unsere Tabelle heisst `tickets`. Die Daten werden mit diesem Befehl ausgelesen:
   ```
   SELECT * FROM tickets; 
   ``` 
