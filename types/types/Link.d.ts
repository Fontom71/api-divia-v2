import Line from "./Line";
import Stop from "./Stop";
export default interface Link {
    id: string;
    nom_commercial: string;
    code: string;
    directionar: string;
    type: string;
    picto: string;
    couleur: string;
    trace: string;
    tad: boolean;
    ligne_aller: Line;
    ligne_retour: Line;
    arrets: Stop[];
}
