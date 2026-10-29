# OS Segurança & Tecnologia — Site React

Site one-page desenvolvido em React + Vite, com fonte Inter, identidade visual azul `#0664FB` e branca, animações suaves, navegação responsiva, quatro modelos 3D interativos e formulário com envio da mensagem para o WhatsApp.

## Como abrir no VS Code

1. Extraia o ZIP e abra a pasta `os-tecnologia-react` no VS Code.
2. Abra o terminal integrado (`Ctrl + J`).
3. Execute:

   ```bash
   npm install
   npm run dev
   ```

4. Acesse o endereço `http://localhost:5173` (ou o endereço mostrado no terminal).

Para criar a versão de produção:

```bash
npm run build
```

Os arquivos prontos para hospedagem estarão em `dist/`.

## Antes de publicar

Edite `src/config.js` e atualize os dados reais da empresa:

- `name`: nome completo (por enquanto o site usa “OS Segurança & Tecnologia”, inferido da identidade enviada).
- `whatsapp`: número de atendimento com DDI/DDD, somente dígitos (ex.: `55DDDNÚMERO`). **Nenhum número fictício foi colocado.** Sem número, o site abre o WhatsApp com a mensagem preparada, mas não seleciona automaticamente o destinatário.
- Dados de contato adicionais, caso deseje divulgá-los.
- `IMAGES`: URLs das fotografias (recomendamos substituir por fotos autorizadas da equipe/projetos reais).

Na seção Avaliações, os três depoimentos apresentados são **exemplos ilustrativos claramente identificados**, não avaliações reais. Antes de publicar, substitua por depoimentos autorizados dos seus clientes.

## Formulário

Campos: nome, telefone, serviço e detalhes opcionais. Validação no navegador; o formulário cria uma mensagem formatada e abre o WhatsApp. **Não existe banco de dados, backend ou armazenamento de dados pessoais neste projeto.**

## Modelos tridimensionais

Os objetos interativos (câmera, ar-condicionado, quadro de disjuntores e painel de automação) são modelos 3D programáticos construídos com Three.js por meio de React Three Fiber. Podem ser girados com mouse/toque, não exigem arquivo GLB externo. São representações ilustrativas, não modelos de equipamentos comerciais.

## Componentes

- `src/App.jsx`: estrutura e seções
- `src/components/Service3D.jsx`: modelos tridimensionais interativos
- `src/data/content.js`: descrições e serviços
- `src/config.js`: configurações da empresa e fotos
- `src/styles.css`: estilos, animações e responsividade
- `public/assets/logo-os.png`: logo fornecida, preparada com transparência

## Licença e imagens

As fotos de demonstração são carregadas online de URLs do Unsplash (`images.unsplash.com`) e dependem de uma conexão com a internet. Verifique sua disponibilidade e condições de uso antes de publicar; preferencialmente substitua por imagens próprias da empresa. Referência: https://unsplash.com/license

## Observações

- Layout otimizado para desktop, tablet e smartphone.
- Menu mobile funcional, rolagem suave e suporte a preferência por movimento reduzido.
- Formulário com campos obrigatórios e mensagens de erro.
- Não há métricas/avaliações reais inventadas, nem envio de dados a servidores do projeto.


## Refinamento editorial
Versão com hierarquia tipográfica Inter revisada, textos mais objetivos, contraste contido e interface menos decorativa. Modelos 3D são ilustrativos.
