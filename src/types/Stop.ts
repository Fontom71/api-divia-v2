export default interface Stop {
  id: string;
  code: string;
  nom: string;
  favori: boolean;
  longitude: string;
  latitude: string;
  recherche: string;
  ligne_id?: string;
  ligne_codetotem?: string;
  ligne_senstotem?: string;
  ligne_nom?: string;
  ligne_nom_commercial?: string;
  ligne_direction?: string;
  ligne_directionar?: string;
  direction?: string;
}
