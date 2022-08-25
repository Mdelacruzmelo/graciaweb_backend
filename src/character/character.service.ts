import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {

  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>
  ) { }

  async create(createCharacterDto: CreateCharacterDto) {

    try {

      const character = await this.characterModel.create(createCharacterDto)
      return character;

    } catch (error) {

      if (error.code === 11000) throw new BadRequestException(
        `Duplicated entry for name ${createCharacterDto.name}`
      )
      throw new InternalServerErrorException()

    }

  }

  async findAll() {
    const characters = await this.characterModel.find()
    return characters
  }

  async findOne(term: string) {

    let character: Character;

    character = await this.characterModel.findOne({
      url: `${process.env.API_URL}/people/${term}/`
    })

    return character;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
