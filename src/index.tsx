import { Cadeira } from "./Cadeira/Cadeira";
import { Cliente } from "./Cliente/Cliente";
import { ComposicaoClienteArteDeco } from "./FabricaMoveis/ComposicaoClienteArteDeco";
import { ComposicaoClienteModerno } from "./FabricaMoveis/ComposicaoClienteModerno";
import { ComposicaoClienteVitoriano } from "./FabricaMoveis/ComposicaoClienteVitoriano";
import { MesaCentro } from "./MesaCentro/MesaCentro";
import { Sofa } from "./Sofa/Sofa";

const client = new Cliente(
  "roberval",
  "rua brasil",
  "333333333",
  "roberval@email.com"
);

const composicaoCadeiraArtDeco: Cadeira =
  new ComposicaoClienteArteDeco().CriarCadeiraArteDeco();

composicaoCadeiraArtDeco.alterarTamanho("Grande");
composicaoCadeiraArtDeco.alterarCor("Vermelha");
composicaoCadeiraArtDeco.alterarMaterial("Bar");

client.adicionarNoCarrinho(composicaoCadeiraArtDeco);

/**
 * verificação pro adicionarNoCarrinho recusar um produto com estilo diferente
 */
const composicaoSofaModerna: Sofa =
  new ComposicaoClienteModerno().CriarSofaModerno();
client.adicionarNoCarrinho(composicaoSofaModerna);

/**
 * test colocar produtos do mesmo estilo no carrinho
 */
const composicaoSofaArteDeco: Sofa =
  new ComposicaoClienteArteDeco().CriarSofaArteDeco();
const composicaoMesaCentroArteDeco: MesaCentro =
  new ComposicaoClienteArteDeco().CriarMesaCentroArteDeco();
client.adicionarNoCarrinho(composicaoSofaArteDeco);
client.adicionarNoCarrinho(composicaoMesaCentroArteDeco);

client.listarCarrinho();

client.carrinho.forEach((produto) => {
  client.comprarProduto(produto);
});

/**
 * test comprar produto que nao foi adicionado no carrinho
 */
const composicaoCadeiraVitoriano: Cadeira =
  new ComposicaoClienteVitoriano().CriarCadeiraVitoriana();
client.comprarProduto(composicaoCadeiraVitoriano);

/**
 * lista de compras finalizadas
 */
client.listarListaComprasFinalizadas();

/**
 * listar carrinho - verificar carrinho vazio pós compra finalizada
 */
client.listarCarrinho();
