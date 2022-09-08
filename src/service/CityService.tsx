export class CityService {

    getCities() {
        return fetch('data/cities.json').then(res => res.json())
            .then(d => d.data);
    }
}