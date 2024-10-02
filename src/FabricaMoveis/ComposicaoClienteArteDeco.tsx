import { Cadeira } from "../Cadeira/Cadeira";
import { Sofa } from "../Sofa/Sofa";
import { FabricaMoveis } from "./FabricaMoveis";
import { CadeiraArteDeco } from "../Cadeira/CadeiraArteDeco";
import { SofaArteDeco } from "../Sofa/SofaArteDeco";
import { MesaCentro } from "../MesaCentro/MesaCentro";
import { MesaCentroArteDeco } from "../MesaCentro/MesaCentroArteDeco";

export class ComposicaoClienteArteDeco implements FabricaMoveis {
  CriarCadeiraArteDeco(): Cadeira {
    return new CadeiraArteDeco();
  }
  CriarSofaArteDeco(): Sofa {
    return new SofaArteDeco();
  }
  CriarMesaCentroArteDeco(): MesaCentro {
    return new MesaCentroArteDeco();
  }

  CriarCadeiraModerno(): Cadeira {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarCadeiraVitoriana(): Cadeira {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarSofaModerno(): Sofa {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarSofaVitoriano(): Sofa {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarMesaCentroModerno(): MesaCentro {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarMesaCentroVitoriano(): MesaCentro {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
}
