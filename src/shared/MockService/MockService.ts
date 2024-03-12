import {GetGroupsResponse} from "./types.ts";

class MockService {
    private baseUrl = '/db';

    fetchData<T>(): Promise<GetGroupsResponse<T>> {
        return new Promise<GetGroupsResponse<T>>(async (resolve) => {
            try {
			 	const response = await fetch(`${this.baseUrl}/groups.json`);
                const data = await response.json();
                setTimeout(() => {
                    resolve({
	                    result: 1,
	                    data
                    });
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                resolve({
	                result: 0
                });
            }
        });
    }
}

const mockService = new MockService();

export default mockService;