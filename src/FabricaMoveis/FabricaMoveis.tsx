import { Sofa } from "../Sofa/Sofa";
import { Cadeira } from "../Cadeira/Cadeira";
import { MesaCentro } from "../MesaCentro/MesaCentro";

export interface FabricaMoveis {
  CriarCadeiraModerno(): Cadeira;
  CriarCadeiraArteDeco(): Cadeira;
  CriarCadeiraVitoriana(): Cadeira;
  CriarSofaModerno(): Sofa;
  CriarSofaArteDeco(): Sofa;
  CriarSofaVitoriano(): Sofa;
  CriarMesaCentroModerno(): MesaCentro;
  CriarMesaCentroArteDeco(): MesaCentro;
  CriarMesaCentroVitoriano(): MesaCentro;
}
