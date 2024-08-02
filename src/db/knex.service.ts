import { Model } from "objection";
import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import * as knex from "knex";

import knexConfig from "../../knexfile";

@Injectable()
export class KnexService implements OnModuleInit, OnModuleDestroy {
  private knexInstance;

  onModuleInit() {
    this.knexInstance = knex(knexConfig);
    Model.knex(this.knexInstance);
  }

  onModuleDestroy() {
    this.knexInstance.destroy();
  }

  getKnex() {
    return this.knexInstance;
  }
}
