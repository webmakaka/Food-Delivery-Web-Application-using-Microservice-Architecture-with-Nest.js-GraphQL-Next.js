### [YouTube][Becodemy] Food Delivery Web Application using Microservice Architecture with Nest.js,GraphQL,Next.js [ENG, 2023]

<br/>

```
$ volta install node pnpm
```

<br/>

```
$ npm install --global @nestjs/cli
```

<br/>

```
$ cd servers
$ nest new gateway --package-manager pnpm

$ cd gateway
$ npm run start:dev
```

<br/>

```
$ pnpm i @apollo/gateway @apollo/subgraph @nestjs/apollo @nestjs/graphql @nestjs/config @nestjs/jwt graphql class-validator bcrypt @types/bcrypt express @prisma/client prisma
```

<br/>

```
$ cd servers
$ nest new users --package-manager pnpm
$ cd users
```

<br/>

```
$ docker-compose up
```

<br/>

```
$ npx prisma init
$ npx prisma db push
$ npx prisma studio
```

<br/>

```

$ npm run start:dev

```

<br/>

```
http://localhost:4002/graphql
```

<br/>

![Application](/img/pic-img01.png?raw=true)

<br/>

Time: 1:07:00

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

```

```
