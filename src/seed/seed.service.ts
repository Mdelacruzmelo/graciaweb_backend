import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Character } from 'src/character/entities/character.entity';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>
  ) { }

  private readonly axios: AxiosInstance = axios

  async seedDatabase() {

    await this.characterModel.deleteMany() // Clear db

    const { data } = await this.axios.get(`${process.env.API_URL}/people`)
    const characters: Character[] = data.results

    await this.characterModel.insertMany(characters) // Insert db

    return "Database filled successfully"
    
  }

}
