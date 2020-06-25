import { Injectable } from '@angular/core';
import {Pessoas } from '../app/pessoas'

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor (private storage: Storage) { }

  async insert(user: Pessoas) {
    const pessoa: Pessoas[] = (await this.storage.get("pessoa")) || []
    user.id = pessoa.length + 1;
    return this.storage.set("pessoa", [...pessoa, user]);
  }

  async findId(id) {
    const pessoa: Pessoas[] = (await this.storage.get("pessoa")) || []
    return pessoa.find((pessoa) => pessoa.id == id);
  }

}
