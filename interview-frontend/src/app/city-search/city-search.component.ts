import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface City {
  cityName: string;
}

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent {
  cities: City[] = [];
  filteredCities: City[] = [];
  searchText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<City[]>('assets/cities.json').subscribe((data) => {
      this.cities = data;
    });
  }

  onSubmit(): void {
    this.filteredCities = this.cities.filter(city =>
      city.cityName.toLowerCase().includes(this.searchText.toLowerCase())
    ).slice(0, 5); // Limit to 5 results
  }
}
