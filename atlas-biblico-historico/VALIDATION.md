# Validação da v0.5

Validação automatizada executada antes do empacotamento:

- 930 entidades genealógicas carregadas;
- 999 relações genealógicas/contextuais carregadas;
- 92 personagens do Novo Testamento no catálogo narrativo;
- 10 blocos de cobertura canônica;
- nenhum ID duplicado em `PEOPLE`;
- nenhum ID duplicado em `BIBLICAL_FIGURES`;
- nenhuma relação aponta para uma entidade inexistente;
- todos os IDs utilizados pelos presets de visualização existem;
- `data.js`, `expansion.js`, `data/canon-v05.js`, `app.js`, `hub.js` e `canon-ui.js` passaram na verificação de sintaxe do Node.js.

## Observação metodológica

A validação acima verifica a consistência estrutural do software. Ela não substitui revisão textual verso a verso. O painel `Bíblia inteira` registra blocos ainda classificados como `parcial`, especialmente listas civis de Esdras/Neemias e listas nominais menores das epístolas.

Na revisão de 1 Crônicas 6, homônimos em sequências levíticas foram mantidos como entidades separadas quando a fusão criaria uma paternidade não segura. Relações `genealogy` são usadas quando o texto apresenta uma cadeia genealógica, mas o projeto não deve afirmar mais precisão geracional do que a fonte permite.
