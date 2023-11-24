CREATE DATABASE IF NOT EXISTS ticketsystem;
USE ticketsystem;
CREATE TABLE IF NOT EXISTS tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  tel VARCHAR(20) NOT NULL,
  helpTopic VARCHAR(255),
  summary TEXT NOT NULL,
  description TEXT
);

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;