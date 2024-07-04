import Line from "./Line";
import Stop from "./Stop";
import Commune from "./Commune";
import Pole from "./Pole";
import Desserte from "./Desserte";
import Service from "./Service";
import Link from "./Link";

export default interface ApiResponse {
  arborescence: {
    lignes: { [key: string]: Line };
  };
  arrets: { [key: string]: Stop };
  lignes: { [key: string]: Line };
  communes: Commune[];
  poles: Pole[];
  dessertes: Desserte[];
  services: Service[];
  liaisons: { [key: string]: Link };
}
