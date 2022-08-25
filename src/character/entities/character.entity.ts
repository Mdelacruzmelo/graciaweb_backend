import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Gender } from "src/data/data";

@Schema()
export class Character extends Document {

    @Prop({ unique: true, index: true })
    name: string;

    @Prop()
    height: string;

    @Prop()
    mass: string;

    @Prop()
    hair_color: string;

    @Prop()
    skin_color: string;

    @Prop()
    eye_color: string;

    @Prop()
    birth_year: string;

    @Prop()
    gender: Gender;

    @Prop()
    homeworld: string;

    @Prop()
    films: string[];

    @Prop()
    species: string[];

    @Prop()
    vehicles: string[];

    @Prop()
    starships: string[];

    @Prop()
    created: string;

    @Prop()
    edited: string;

    @Prop()
    url: string;


}

export const CharacterSchema = SchemaFactory.createForClass(Character)