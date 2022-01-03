import { Reducer   } from "@reduxjs/toolkit";
import Generator from "../../generator/generate";
import IPerson from "../../types/interfaces/IPerson";
import ICharacterAction from "../actions/characterActions";

type CharacterState = Array<IPerson>;
const gena = new Generator("VV",Math.random()*10000000)
const charDefaultState: CharacterState = gena.characters.all;

export const characterReducer: Reducer<CharacterState | undefined,ICharacterAction> = (state=charDefaultState,action) => {
    switch (action.type) {
        case "GenearateDynasty":
            gena.characters.clear()
            gena.generateDynasty(30)
            return gena.characters.all
        case "CreateNewCharacter":
            if(action.payload) {
                gena.characters.add(action.payload)
                return gena.characters.all
            }
            gena.generateDynasty(1);
            return gena.characters.all
        case "DeleteCharacter":
            gena.characters.delete(action.payload);
            return gena.characters.all
        case "UpdateCharacter":
            gena.characters.add(action.payload)
            return gena.characters.all
        default:
            return state
    }
}