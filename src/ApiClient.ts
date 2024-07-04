import axios from "axios";
import Line from "./types/Line";
import Stop from "./types/Stop";
import ApiResponse from "./types/ApiResponse";

class ApiClient {
  public static API_URL: string =
    "https://bo-api.divia.fr/api/reseau/type/json";
  private _apiUrl: string;

  constructor(apiUrl: string = ApiClient.API_URL) {
    this._apiUrl = apiUrl;
  }

  public async fetchLinesAndStops(): Promise<{ lines: Line[]; stops: Stop[] }> {
    try {
      const response = await axios.get<ApiResponse>(this._apiUrl);
      const lignes = response.data.arborescence.lignes;
      const arrets = response.data.arrets;
      return {
        lines: Object.values(lignes),
        stops: Object.values(arrets),
      };
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des lignes et des arrêts:",
        error
      );
      throw error;
    }
  }
}

export default ApiClient;
