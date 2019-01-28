# Como usar

- primeiro instalar o schematics-cli:

```cmd
npm install -g @angular-devkit/schematics-cli
```

- git clone do repositório em sua máquina.

```cmd
cd 'path/para/a/pasta/que/você/clonou/o/schema'
npm run build
schematics .:projeto-base-frontend
```

- comando npm link deve ser executado dentro do seu novo projeto, o projeto que você deseja que seja organizado com a estrutura padrão.

```cmd
cd 'path/do/seu/novo/projeto'
npm link 'path/para/a/pasta/que/você/clonou/o/schema'
```

- após usar o npm link, usar o seguinte comando: 

```cmd
ng config cli.defaultCollection projeto-base-frontend
```

- o comando acima irá configurar o angular para usar o nosso modelo.
- após feito isto apenas rodar o comando:

```angular
ng g projeto-base-frontend:projeto-base-frontend
```
