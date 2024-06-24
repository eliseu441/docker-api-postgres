# docker-api-postgres


//VERIFIQUE A ROTA NO .env

api docker acessando banco postgres e pgadmin pela docker-network.

criar prisma com as configurações do linux:
npx prisma generate


criar migrations do prisma:
npx prisma migrate dev --name init

por precaução remover qualquer container parado do docker com:
    docker system prune -a

criar a network "my-network" com o comando:
    docker network create --driver bridge my-network


criar banco "my-postgres" utilizando docker:
    docker run --name my-postgres --network=my-network -p 5433:5432 -e POSTGRES_PASSWORD=123 -d postgres

criar hospedagem do pgadmin na rota 15432 porta 80 com o comando:
    docker run --name my-pgadmin --network=my-network -p 15432:80 -e PGADMIN_DEFAULT_EMAIL=email.teste@gmail.com -e PGADMIN_DEFAULT_PASSWORD=123 -d dpage/pgadmin4

faça o docker-compose build e depois docker-compose up

//aplicação a partir daqui já roda na porta 3000, anotacoes abaixo para testes

entrar dentro do terminal container:
docker exec -it "id do container" bash

lembrar de criar yml para criar docker sem comandos.




