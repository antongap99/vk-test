class MockService {
	private baseUrl = '/db';

	fetchData<T>(): Promise<T | null> {
		return new Promise<T | null>(async (resolve) => {
			try {
				const response = await fetch(`${this.baseUrl}/groups.json`);
				const data = await response.json();
				setTimeout(() => {
					resolve(data);
				}, 1000);
			} catch (error) {
				console.error('Error fetching data:', error);
				resolve(null); // Можете обработать ошибку так, как вам удобно
			}
		});
	}
}

const mockService = new MockService();

export default mockService;