import { Cadeira } from "../Cadeira/Cadeira";
import { CadeiraVitoriano } from "../Cadeira/CadeiraVitoriano";
import { Sofa } from "../Sofa/Sofa";
import { SofaVitoriano } from "../Sofa/SofaVitoriano";
import { FabricaMoveis } from "./FabricaMoveis";
import { MesaCentro } from "../MesaCentro/MesaCentro";
import { MesaCentroVitoriano } from "../MesaCentro/MesaCentroVitoriano";

export class ComposicaoClienteVitoriano implements FabricaMoveis {
  CriarMesaCentroVitoriano(): MesaCentro {
    return new MesaCentroVitoriano();
  }
  CriarCadeiraVitoriana(): Cadeira {
    return new CadeiraVitoriano();
  }
  CriarSofaVitoriano(): Sofa {
    return new SofaVitoriano();
  }

  CriarCadeiraModerno(): Cadeira {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarCadeiraArteDeco(): Cadeira {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarSofaModerno(): Sofa {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarSofaArteDeco(): Sofa {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarMesaCentroModerno(): MesaCentro {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
  CriarMesaCentroArteDeco(): MesaCentro {
    throw new Error("Falha ao comprar este tipo de produto com este cliente!");
  }
}
