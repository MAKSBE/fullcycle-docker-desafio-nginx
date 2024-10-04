# Desafio Nginx com Node.js

Este desafio faz parte do curso Full Cycle (módulo Docker).

O objetivo é exibir uma mensagem na tela utilizando Nginx como proxy reverso para uma aplicação em Node.js.

Ao receber uma requisição, a aplicação deverá:
1. Salvar um registro no banco de dados (MySQL).
2. Exibir a mensagem "Full Cycle Rocks!".
3. Apresentar, logo abaixo, uma lista com os registros armazenados no banco de dados.

Para iniciar, execute o comando abaixo usando Docker Compose:

docker-compose up -d

Abra o navegador e acesse o seguinte endereço:

http://localhost:8080/
