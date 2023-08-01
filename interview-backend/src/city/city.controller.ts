import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

interface City {
  name: string;
}

@Controller('cities')
export class CityController {
  private cities: City[] = [];

  constructor() {
    const filePath = path.join('../cities.json');
    this.cities = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  @Get()
  getCities(): City[] {
    return this.cities;
  }
}
