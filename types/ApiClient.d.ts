import Line from "./types/Line";
import Stop from "./types/Stop";
declare class ApiClient {
    static API_URL: string;
    private _apiUrl;
    constructor(apiUrl?: string);
    fetchLinesAndStops(): Promise<{
        lines: Line[];
        stops: Stop[];
    }>;
}
export default ApiClient;
