# Projeto proex ai man

## Requisitos
- Node.js >= 20 (apenas para compatibilidade)
- Bun (obrigatorio)
- PostgreSQL >= 14

## Instalar dependencias
```bash
bun install
````

## Configurar banco

1. Crie um banco de dados PostgreSQL local.
2. Copie o arquivo `env-example` para `.env.local` ou `.env`.
3. Ajuste a variavel `DATABASE_URL` com a URL do seu banco, por exemplo:

   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
   ```

## Migracoes

Rodar as migracoes para criar as tabelas:

```bash
bunx drizzle-kit generate
bunx drizzle-kit push
```

ou apenas:

```bash
bunx drizzle-kit push
```

## Executar seed

O projeto possui um script de seed para popular dados de teste:

```bash
bun run scripts/seed
```

## Rodar servidor de dev

```bash
bun dev
```

O app ficara disponivel em `http://localhost:3000`.

## Observacoes importantes

* Sempre utilize **bun** para rodar scripts e nao `npm` ou `yarn`.
* Se voce mudar o schema, rode novamente `bunx drizzle-kit push` e depois `bun run seed`.
