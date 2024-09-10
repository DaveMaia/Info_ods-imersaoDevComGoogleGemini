/**
 * Array de colaboradores com seus nomes, categorias e localidades.
 *
@type {Array<Object>}
 */
const colaboradores = [
  { nome: "Empresa A", categoria: "Educação de Qualidade", localidade: "São Paulo" },
  { nome: "Empresa B", categoria: "Energia Limpa e Acessível", localidade: "Rio de Janeiro" },
  { nome: "João Silva", categoria: "Saúde e Bem-Estar", localidade: "Curitiba" },
  { nome: "Maria Oliveira", categoria: "Igualdade de Gênero", localidade: "Porto Alegre" },
  { nome: "Empresa C", categoria: "Trabalho Decente e Crescimento Econômico", localidade: "Brasília" },
  { nome: "Lucas Pereira", categoria: "Indústria, Inovação e Infraestrutura", localidade: "Recife" },
  { nome: "Fernanda Lima", categoria: "Redução das Desigualdades", localidade: "Salvador" },
  { nome: "Empresa D", categoria: "Cidades e Comunidades Sustentáveis", localidade: "Florianópolis" },
  { nome: "Ricardo Santos", categoria: "Consumo e Produção Responsáveis", localidade: "Fortaleza" },
  { nome: "Patrícia Costa", categoria: "Ação Contra a Mudança Global do Clima", localidade: "Belo Horizonte" },
  { nome: "Empresa E", categoria: "Vida na Água", localidade: "Manaus" },
  { nome: "Carla Souza", categoria: "Vida Terrestre", localidade: "João Pessoa" },
  { nome: "Empresa F", categoria: "Paz, Justiça e Instituições Eficazes", localidade: "Maceió" },
  { nome: "André Lopes", categoria: "Parcerias e Meios de Implementação", localidade: "Campo Grande" },
  { nome: "Empresa G", categoria: "Educação de Qualidade", localidade: "São Paulo" },
  { nome: "Rodrigo Alves", categoria: "Energia Limpa e Acessível", localidade: "Rio de Janeiro" },
  { nome: "Empresa H", categoria: "Saúde e Bem-Estar", localidade: "Curitiba" },
  { nome: "Daniela Freitas", categoria: "Igualdade de Gênero", localidade: "Porto Alegre" },
  { nome: "Empresa I", categoria: "Trabalho Decente e Crescimento Econômico", localidade: "Fortaleza" },
  { nome: "Cláudia Nascimento", categoria: "Indústria, Inovação e Infraestrutura", localidade: "Salvador" },
  { nome: "Empresa J", categoria: "Redução das Desigualdades", localidade: "Recife" },
  { nome: "Juliana Torres", categoria: "Cidades e Comunidades Sustentáveis", localidade: "Brasília" },
  { nome: "Empresa K", categoria: "Consumo e Produção Responsáveis", localidade: "Belo Horizonte" },
  { nome: "José Rodrigues", categoria: "Ação Contra a Mudança Global do Clima", localidade: "Florianópolis" },
  { nome: "Empresa L", categoria: "Vida na Água", localidade: "Manaus" },
  { nome: "Ana Paula", categoria: "Vida Terrestre", localidade: "Porto Velho" },
  { nome: "Empresa M", categoria: "Paz, Justiça e Instituições Eficazes", localidade: "São Luís" },
  { nome: "Tiago Oliveira", categoria: "Parcerias e Meios de Implementação", localidade: "Teresina" },
  { nome: "Empresa N", categoria: "Educação de Qualidade", localidade: "Belém" },
  { nome: "Marcelo Batista", categoria: "Energia Limpa e Acessível", localidade: "Natal" },
  { nome: "Empresa O", categoria: "Saúde e Bem-Estar", localidade: "Aracaju" },
  { nome: "Renata Duarte", categoria: "Igualdade de Gênero", localidade: "Vitória" },
  { nome: "Empresa P", categoria: "Trabalho Decente e Crescimento Econômico", localidade: "Goiânia" },
  { nome: "Fabiana Cardoso", categoria: "Indústria, Inovação e Infraestrutura", localidade: "Cuiabá" },
  { nome: "Empresa Q", categoria: "Redução das Desigualdades", localidade: "Macapá" },
  { nome: "Leandro Mendes", categoria: "Cidades e Comunidades Sustentáveis", localidade: "Palmas" },
  { nome: "Empresa R", categoria: "Consumo e Produção Responsáveis", localidade: "Boa Vista" },
  { nome: "Rafaela Gomes", categoria: "Ação Contra a Mudança Global do Clima", localidade: "Porto Alegre" },
  { nome: "Empresa S", categoria: "Vida na Água", localidade: "Rio Branco" },
  { nome: "Diego Ribeiro", categoria: "Vida Terrestre", localidade: "Salvador" },
  { nome: "Empresa T", categoria: "Paz, Justiça e Instituições Eficazes", localidade: "Curitiba" },
  { nome: "Simone Alves", categoria: "Parcerias e Meios de Implementação", localidade: "São Paulo" }
];

/**
 * Exibe uma lista de colaboradores no elemento HTML com o id "collaborator-list".
 *
 * @param {Array<Object>} list - A lista de colaboradores a ser exibida.
 */

function displayCollaborators(list) {
  const ul = document.getElementById('collaborator-list');
  ul.innerHTML = '';  // Limpa a lista atual
  list.forEach(colaborador => {
      const li = document.createElement('li');
      li.textContent = `${colaborador.nome} - ${colaborador.categoria} - ${colaborador.localidade}`;
      ul.appendChild(li);
  });
}

/**
 * Procura colaboradores com base nos seus nomes, categorias e localidades.
 *
 * @example
 * // Procurar colaboradores com nome "Empresa" e categoria "Educação de Qualidade"
 * search();
 */

function search() {
  const nameSearch = document.getElementById('search-name').value.toLowerCase();
  const categorySearch = document.getElementById('search-category').value.toLowerCase();
  const locationSearch = document.getElementById('search-location').value.toLowerCase();

  const filtered = colaboradores.filter(colaborador => 
      (nameSearch === '' || colaborador.nome.toLowerCase().includes(nameSearch)) &&
      (categorySearch === '' || colaborador.categoria.toLowerCase().includes(categorySearch)) &&
      (locationSearch === '' || colaborador.localidade.toLowerCase().includes(locationSearch))
  );
  
  displayCollaborators(filtered);
}

// Exibir todos os colaboradores ao carregar a página
displayCollaborators(colaboradores);
