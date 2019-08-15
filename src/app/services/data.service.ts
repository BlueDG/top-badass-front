import { Injectable } from '@angular/core';
import { Character } from '../models';

@Injectable({
  providedIn: 'root'


})



export class DataService {

  constructor() { 


  }

  characterList: Character[] = [];



}
