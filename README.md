# Einfaches Ticketsystem mit Docker


## Systemvoraussetzungen

- Docker Desktop


## Installation

1. Klonen sie das repository in den von ihnen gewünschten Ordner mit dem befehl
   ```
   git clone https://github.com/iliakalygin/Ticketsystem-Docker
   ```
3. Wechslen Sie in den Ticketsystem Ordner mit dem Befehl, das kann auch über den File explorer getan werden.
   ```
   cd Ticketsystem
   ```
   um die weiteren Befehle ausführen zu können.

## Container Starten

1. Um die Container zu starten muss die Docker-Compose Datei ausgeführt werden:
   ```
   docker-compose up --build
   ```
3. Unter den folgenden Ports werden nun das Front- und Datanbank gestartet:
    
   Frontend (Webseite): ```http://localhost:80```
 
   Datanbank (SQL): ```http://localhost:3000```
    
5. Die Website kann mit dieser URL gestartet werden:
   ```
   http://localhost:80
   ```

## Daten aus der Datenbank auslesen.
