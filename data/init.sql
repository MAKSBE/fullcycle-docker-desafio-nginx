CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  UNIQUE KEY unique_name (name)
);

INSERT INTO people (id, name) VALUES(1, 'Leonardo Castilho')
  ON DUPLICATE KEY UPDATE name = 'Leonardo Castilho';
INSERT INTO people (id, name) VALUES(2, 'Marina Fagundes')
  ON DUPLICATE KEY UPDATE name = 'Marina Fagundes';
INSERT INTO people (id, name) VALUES(3, 'Rafael Cunha')
  ON DUPLICATE KEY UPDATE name = 'Rafael Cunha';
INSERT INTO people (id, name) VALUES(4, 'Juliana Pereira')
  ON DUPLICATE KEY UPDATE name = 'Juliana Pereira';
INSERT INTO people (id, name) VALUES(5, 'Carlos Almeida')
  ON DUPLICATE KEY UPDATE name = 'Carlos Almeida';
INSERT INTO people (id, name) VALUES(6, 'Fernanda Oliveira')
  ON DUPLICATE KEY UPDATE name = 'Fernanda Oliveira';
INSERT INTO people (id, name) VALUES(7, 'Ricardo Moreira')
  ON DUPLICATE KEY UPDATE name = 'Ricardo Moreira';
INSERT INTO people (id, name) VALUES(8, 'Patrícia Souza')
  ON DUPLICATE KEY UPDATE name = 'Patrícia Souza';
