# Arquitetura — Atlas Bíblico-Histórico v0.5

## Domínios separados

1. **Genealogia bíblica** — `PEOPLE` + `RELATIONSHIPS`.
2. **Catálogo bíblico narrativo** — `BIBLICAL_FIGURES`.
3. **Cobertura** — `BIBLE_COVERAGE`.
4. **História** — eventos e governantes.
5. **Tradições** — famílias cristãs e relações de influência/continuidade/reforma.

## Arquivos principais

- `data.js`: núcleo Gênesis 1–46.
- `expansion.js`: Davi → Jesus + história/tradições.
- `data/canon-v05.js`: 1 Crônicas 4–9, Esdras/Neemias e catálogo NT.
- `app.js`: árvore genealógica e estudo.
- `hub.js`: Jesus, história e tradições.
- `canon-ui.js`: cobertura bíblica e catálogo canônico.
- `styles.css`: apresentação.

## Por que ainda não migrar para banco

Com ~1.000 relações e ~1.000 entidades, o site está no limite superior confortável para arquivos estáticos, mas ainda é simples de distribuir e abrir localmente. A migração para PostgreSQL/Supabase passa a valer a pena quando houver:

- editor administrativo;
- colaboração entre revisores;
- importações em lote;
- versionamento de fontes por relação;
- buscas combinadas por livro, período, pessoa, manuscrito e tradição textual.

O `schema.sql` permanece como base para essa migração.

## Regra de rigor

Nunca converter automaticamente uma lista condensada em `pai → filho`. Quando o texto só estabelece pertencimento/ancestralidade, usar `ancestor` ou `genealogy` e registrar a passagem.
