import { IsArray, IsString, MinLength } from "class-validator";
import { Gender } from "src/data/data";

export class CreateCharacterDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    height: string;

    @IsString()
    mass: string;

    @IsString()
    hair_color: string;

    @IsString()
    skin_color: string;

    @IsString()
    eye_color: string;

    @IsString()
    birth_year: string;

    @IsString()
    gender: Gender;

    @IsString()
    homeworld: string;

    @IsArray()
    films: string[];

    @IsArray()
    species: string[];

    @IsArray()
    vehicles: string[];

    @IsArray()
    starships: string[];

    @IsString()
    created: string;

    @IsString()
    edited: string;

    @IsString()
    url: string;

}
