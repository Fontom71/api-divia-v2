import API from "./ApiClient";
import Line from "./types/Line";
import Stop from "./types/Stop";

class ApiDivia {
  private apiClient: API;
  private lines: Line[] = [];
  private stops: Stop[] = [];

  constructor(apiClient: API = new API()) {
    this.apiClient = apiClient;
  }

  public async run() {
    try {
      const { lines, stops } = await this.apiClient.fetchLinesAndStops();
      this.lines = lines;
      this.stops = stops;
      this.displayLinesAndStops();
    } catch (error) {
      console.error("Erreur dans l'exécution principale:", error);
    }
  }

  private displayLinesAndStops() {
    console.log("Lignes:");
    this.lines.forEach((line) => {
      console.log(`Ligne: ${line.nom_commercial}`);
      Object.values(line.arrets).forEach((stop) => {
        console.log(`  Arrêt: ${stop.nom} (ID: ${stop.id})`);
      });
    });

    console.log("Arrêts indépendants:");
    this.stops.forEach((stop) => {
      console.log(`Arrêt: ${stop.nom} (ID: ${stop.id})`);
    });
  }

  public getLine(lineId: string): Line | undefined {
    return this.lines.find((line) => line.id === lineId);
  }

  public findLine(lineName: string): Line | undefined {
    return this.lines.find((line) =>
      line.nom_commercial.toLowerCase().includes(lineName.toLowerCase())
    );
  }

  public findStop(stopName: string): Stop | undefined {
    return this.stops.find((stop) =>
      stop.nom.toLowerCase().includes(stopName.toLowerCase())
    );
  }

  public getLines(): Line[] {
    return this.lines;
  }

  public getStops(): Stop[] {
    return this.stops;
  }
}

export default ApiDivia;
