# Imagens dos cards — guia de geração por IA

Todos os cards de serviço/segmento do site abrem um **modal de detalhe**. Esse
modal já tem o espaço da imagem pronto; enquanto o arquivo não existe, aparece
o placeholder **"Imagem em breve"**.

São **48 imagens** no total (6 Contabilidade + 20 Consultoria + 17 Sistemas +
5 Marcas & Patentes).

---

## 1. Como o site carrega as imagens

**Pasta única:** `public/images/detalhes/`

**Nome do arquivo:** exatamente a chave listada nas tabelas + extensão.
Ex.: o card *Formação do Preço de Venda — Markup* usa a chave `markup`, então o
arquivo é `public/images/detalhes/markup.jpg`.

- Formatos aceitos: **`.jpg`** (preferido) → `.jpeg` → `.png` → `.webp`
  (o site tenta nessa ordem e usa o primeiro que existir)
- Proporção: **16:9 (paisagem)**
- Tamanho: **1200×675px** (mínimo 960×540px)
- Peso ideal: até ~250 KB por imagem (JPG qualidade 80)

**Não precisa mexer em código.** Salvou o arquivo com o nome certo na pasta
certa, a imagem aparece no lugar do placeholder. Pode ir gerando aos poucos —
cada card funciona de forma independente.

> Nomes de arquivo são **case-sensitive** no servidor (GitHub Pages).
> Use tudo minúsculo, sem acento e com hífen, exatamente como nas tabelas.

---

## 2. Prompt-base (cole antes de cada prompt específico)

Este bloco garante que as 48 imagens pareçam da mesma família visual:

```
Fotografia corporativa profissional, realista, alta qualidade, luz natural suave,
ambiente brasileiro contemporâneo, composição limpa com espaço negativo,
profundidade de campo suave, paleta harmonizando azul-marinho (#1a3270) e
detalhes em dourado (#c9a227), clima confiável e sofisticado.
Formato 16:9, 1200x675px, sem texto, sem letras, sem logotipos, sem marca d'agua.
CENA: <prompt específico do card>
```

**Evitar (negative prompt):** texto legível, letras, números, logotipos, marcas,
rostos distorcidos, mãos com dedos extras, colagem, arte 3D genérica de banco de
imagens, excesso de saturação, ícones flutuantes tipo "hologramas de tecnologia".

**Ajustes por ferramenta**

- *Midjourney:* acrescente `--ar 16:9 --style raw --v 6`
- *ChatGPT / Gemini / Firefly:* peça explicitamente "imagem widescreen 16:9"
- *Stable Diffusion:* gere em 1344×768 e redimensione para 1200×675

**Atalho:** o arquivo [prompts-imagens.txt](prompts-imagens.txt) já traz os 48 prompts
completos (base + cena) prontos para colar um a um, com o nome do arquivo de cada um.

**Dica de coerência:** gere por bloco (todas de Contabilidade juntas, depois
Consultoria etc.), reaproveitando a mesma seed/estilo dentro do bloco.

---

## 3. Contabilidade — 6 imagens

Página: [contabilidade/index.html](../contabilidade/index.html)

| Arquivo | Card | Prompt específico (CENA) |
|---|---|---|
| `constituicao.jpg` | Constituição, alteração e legalização de empresas | Dois empresários assinando o contrato social sobre a mesa de um escritório moderno, pasta de documentos e caneta em destaque, aperto de mãos ao fundo desfocado |
| `fiscal.jpg` | Contabilidade fiscal | Contador analisando balanço e demonstrativos contábeis em monitor com gráficos, livros contábeis e calculadora sobre a mesa |
| `escrituracao.jpg` | Escrituração fiscal digital | Mãos digitando em teclado com painel de dados fiscais e notas eletrônicas na tela, ambiente de escritório organizado |
| `folha.jpg` | Folha de pagamento | Profissional de RH revisando planilha de folha de pagamento em notebook, crachás e pastas de colaboradores sobre a mesa |
| `ativos.jpg` | Controle de ativos imobilizados | Profissional com tablet fazendo inventário de equipamentos e máquinas etiquetadas em depósito empresarial iluminado |
| `auditoria.jpg` | Auditoria e perícias | Auditor conferindo relatórios financeiros impressos com óculos e lupa sobre a mesa, pilha organizada de documentos |

## 4. Consultoria — 20 imagens

Página: [consultoria/index.html](../consultoria/index.html)

| Arquivo | Card | Prompt específico (CENA) |
|---|---|---|
| `planejamento-estrategico.jpg` | Planejamento Estratégico | Equipe executiva em reunião diante de quadro branco com metas, setas e plano de ação de longo prazo, post-its coloridos |
| `diagnostico-viabilidade.jpg` | Diagnóstico e Análise de Viabilidade | Consultor apresentando gráfico de ponto de equilíbrio em notebook para dois empresários atentos |
| `controles-internos.jpg` | Análise e Estruturação de Controles Internos | Fluxograma de processos de compras e estoque desenhado em quadro de vidro, consultor apontando as etapas |
| `balanco-dre.jpg` | Apuração, Análise de Balanço e Demonstrativo de Resultado | Dashboard financeiro com gráficos comparativos em monitor amplo, relatório impresso ao lado, gestor analisando os indicadores |
| `markup.jpg` | Formação do Preço de Venda — Markup | Mãos usando calculadora ao lado de planilha de custos e precificação de produtos, etiquetas de preço sobre a mesa |
| `planejamento-economico.jpg` | Planejamento Econômico e Financeiro | Consultor e empresário analisando projeção orçamentária anual em gráfico de linhas ascendente na tela |
| `valor-empresa.jpg` | Análise de Valor da Empresa | Apresentação executiva com curva de valuation e crescimento em telão, pequena plateia de gestores |
| `auditoria-consultoria.jpg` | Auditoria | Auditora examinando livros contábeis e extratos financeiros em sala de reunião envidraçada |
| `lideranca.jpg` | Liderança e Desenvolvimento de Equipe | Líder orientando equipe reunida em círculo em ambiente de trabalho colaborativo e descontraído |
| `avaliacao-desempenho.jpg` | Avaliação de Desempenho | Gestora e colaborador em conversa de feedback um a um, formulário de avaliação sobre a mesa |
| `remuneracao.jpg` | Remuneração | Reunião de RH discutindo pacote de salários e benefícios, notebook com tabela salarial e documentos |
| `rotatividade.jpg` | Rotatividade | Analista de RH avaliando gráfico de turnover em tela, ao fundo equipe trabalhando no escritório |
| `protecao-patrimonial.jpg` | Proteção Patrimonial | Advogado e empresário revisando documentos de bens e imóveis em escritório sóbrio, planta de imóvel ao fundo |
| `planejamento-sucessorio.jpg` | Planejamento Sucessório | Empresário sênior e filhos adultos em reunião com consultor na mesa de uma empresa familiar |
| `reorganizacao-societaria.jpg` | Reorganização Societária | Sócios assinando documentos societários com consultor conduzindo a reunião, organograma societário na tela |
| `fusoes.jpg` | Aquisições, Fusões, Cisões e Incorporações | Aperto de mãos firme entre executivos selando negociação, equipes dos dois lados desfocadas ao fundo |
| `planejamento-tributario.jpg` | Planejamento Tributário | Especialista comparando cenários de carga tributária em duas telas, legislação impressa ao lado |
| `fiscal-exportadoras.jpg` | Consultoria Fiscal para Empresas Exportadoras/Importadoras | Profissional com tablet diante de contêineres em pátio portuário, documentos de comércio exterior na mão |
| `consultoria-fiscal.jpg` | Consultoria Fiscal | Conferência de notas fiscais e apuração de impostos em tela dupla, checklist de conformidade impresso |
| `recuperacao-tributos.jpg` | Revisão e Recuperação de Tributos | Analista revisando declarações fiscais retificadoras e marcando créditos tributários recuperados em relatório |

## 5. Sistemas (ERP por segmento) — 17 imagens

Página: [sistemas/index.html](../sistemas/index.html)

São as únicas em que faz sentido aparecer **ambiente produtivo real** (chão de
fábrica / loja). Mostre o segmento e, quando couber, um **terminal, tablet ou
monitor do ERP em uso** — sem texto legível na tela.

| Arquivo | Card | Prompt específico (CENA) |
|---|---|---|
| `metalmecanica.jpg` | Indústria Metalmecânica | Chão de fábrica metalmecânica com máquina CNC de corte de chapas em operação, operador com EPI acompanhando a produção em terminal industrial |
| `metalurgica.jpg` | Indústria Metalúrgica | Interior de metalúrgica com peças metálicas e fundição, faíscas controladas, operador com EPI e supervisor conferindo tablet |
| `alimentos-bebidas.jpg` | Indústria de Alimentos e Bebidas | Linha de produção de alimentos em aço inox, esteira com produtos embalados, operadores uniformizados com touca e luvas |
| `quimica-cosmetica.jpg` | Indústria Química e Cosmética | Linha de envase de cosméticos com frascos em esteira e técnica de jaleco conferindo qualidade em laboratório limpo |
| `plastico-borracha.jpg` | Indústria de Plástico e Borracha | Injetoras plásticas em operação em galpão industrial, caixas de peças recém-produzidas, operador monitorando o processo |
| `aluminio-utilidades.jpg` | Indústria de Alumínio e Utilidades Domésticas | Linha de produção de panelas e utilidades de alumínio, peças polidas alinhadas em esteira, operador com EPI |
| `blocos-pavers.jpg` | Indústria de Blocos, Pavers e Pré-Moldados | Pátio de fábrica com blocos de concreto e pavers empilhados em paletes, vibro-prensa ao fundo, encarregado com tablet |
| `moveis-madeiras.jpg` | Indústria de Móveis e Madeiras | Marcenaria industrial com painéis de MDF sendo cortados em seccionadora, móveis planejados em montagem |
| `atacado-distribuicao.jpg` | Atacados e Distribuidores | Centro de distribuição amplo com prateleiras altas, empilhadeira e conferente usando coletor de código de barras |
| `textil-confeccao.jpg` | Indústria Têxtil e de Confecção | Linha de costura industrial com costureiras em bancadas, rolos de tecido coloridos e peças em produção |
| `varejo-moda.jpg` | Varejo de Moda | Interior de loja de moda contemporânea com araras organizadas, vendedora atendendo cliente e caixa com terminal |
| `lojas-calcados.jpg` | Lojas de Calçados | Loja de calçados com prateleiras iluminadas de sapatos e tênis, vendedor atendendo cliente sentado no provador |
| `redes-franquias.jpg` | Gestão de Redes de Lojas e Franquias | Corredor de shopping com fachadas de lojas da mesma rede, gerente regional conferindo indicadores em tablet |
| `rfid.jpg` | RFID — Etiquetas Inteligentes | Colaborador fazendo inventário com leitor RFID de mão no estoque de uma loja, etiqueta inteligente em destaque na peça de roupa |
| `oticas.jpg` | Óticas | Interior de ótica moderna com expositor de armações, optometrista atendendo cliente no balcão |
| `perfumaria-cosmeticos.jpg` | Perfumaria e Cosméticos | Loja de perfumaria e cosméticos com gôndolas bem iluminadas, cliente experimentando produto e atendente ao lado |
| `utilidades-presentes.jpg` | Utilidades, Presentes e Brinquedos | Loja de utilidades e presentes com prateleiras coloridas de brinquedos e papelaria, cliente escolhendo produto |

## 6. Marcas & Patentes — 5 imagens

Página: [marcas/index.html](../marcas/index.html)

| Arquivo | Card | Prompt específico (CENA) |
|---|---|---|
| `registro-marcas.jpg` | Registro de marcas | Designer e consultor analisando painel de identidade visual e símbolos de marca sobre a mesa, carimbo de registro ao lado (sem texto legível) |
| `registro-patentes.jpg` | Registro de patentes | Inventor apresentando protótipo e desenho técnico de engrenagem a um consultor, mesa com esboços de projeto |
| `codigo-barras.jpg` | Código de barras | Leitor escaneando código de barras em embalagem de produto na linha de expedição, foco no feixe do leitor |
| `direito-autoral.jpg` | Direito autoral | Mesa criativa com livro, partitura, ilustração e câmera, autor organizando sua obra para registro |
| `registro-software.jpg` | Registro de software | Desenvolvedor diante de monitor com código-fonte desfocado, documentos de registro de software impressos na mesa |

---

## 7. Fluxo sugerido

1. Gere a imagem com prompt-base + CENA do card.
2. Exporte em **16:9, 1200×675px**, JPG qualidade ~80.
3. Renomeie com a chave exata da tabela (ex.: `atacado-distribuicao.jpg`).
4. Salve em `public/images/detalhes/`.
5. Abra a página, clique no card e confira.
6. Faça commit da pasta — no ar, a imagem aparece automaticamente.

## 8. Ajustar tamanho das imagens geradas

Imagem de IA costuma sair grande demais (2752×1536, 2–3 MB). Depois de jogar os
arquivos na pasta, rode na raiz do projeto:

```powershell
python tools\otimizar-imagens.py
```

Ele varre `public/images/detalhes/`, corta no centro para 16:9, redimensiona
para 1200×675 e salva em JPG progressivo até caber em ~250 KB. Arquivos que já
estão no padrão são ignorados. Requer `pillow` (`pip install pillow`).

> O script **sobrescreve** os arquivos. Se quiser guardar o original em alta,
> salve fora da pasta antes de rodar.

## 9. Conferir o que ainda falta

Rode na raiz do projeto (PowerShell) para listar as chaves que ainda estão sem
imagem:

```powershell
$keys = Select-String -Path .\*\index.html -Pattern 'data-detail-key="([^"]+)"' -AllMatches |
  ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$have = Get-ChildItem .\public\images\detalhes -File -ErrorAction SilentlyContinue |
  ForEach-Object { $_.BaseName }
$keys | Where-Object { $have -notcontains $_ }
```

## 10. Observações

- O modal continua funcionando sem imagem: sem arquivo, só o placeholder.
- Ao trocar uma imagem já publicada, mantenha o mesmo nome — o navegador guarda
  cache; confira com `Ctrl+F5`.
- Evite imagens com pessoas identificáveis reais ou marcas de terceiros
  visíveis, por causa de direito de imagem.
