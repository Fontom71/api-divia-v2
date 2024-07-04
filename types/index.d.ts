import API from "./ApiClient";
import Line from "./types/Line";
import Stop from "./types/Stop";
declare class ApiDivia {
    private apiClient;
    private lines;
    private stops;
    constructor(apiClient?: API);
    run(): Promise<void>;
    private displayLinesAndStops;
    getLine(lineId: string): Line | undefined;
    findLine(lineName: string): Line | undefined;
    findStop(stopName: string): Stop | undefined;
    getLines(): Line[];
    getStops(): Stop[];
}
export default ApiDivia;
