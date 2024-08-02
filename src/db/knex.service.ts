import { Model } from "objection";
import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import * as knex from "knex";
<<<<<<< HEAD
const knexConfig = {
=======

const knexConfig =  {
>>>>>>> e8aecaa1de091597e501f0e27c8b2ecd71486b33
  client: "pg",
  connection: {
    user: "avnadmin",
    password: "AVNS_C9MeAh_Z0vvQz92qa-T",
    host: "pg-whatsapp-abdul-jabbar.a.aivencloud.com",
    port: 11224,
    database: "defaultdb",
    ssl: {
      rejectUnauthorized: true,
      ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUHbILs3upZyQ6bnKlJ6m/JRNciUkwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvOGIxY2RhY2ItNTNhMC00MDE0LTliMjgtYmFlYTViYTRl
MjQzIFByb2plY3QgQ0EwHhcNMjQwMTI4MTAxMjAxWhcNMzQwMTI1MTAxMjAxWjA6
MTgwNgYDVQQDDC84YjFjZGFjYi01M2EwLTQwMTQtOWIyOC1iYWVhNWJhNGUyNDMg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALH9U1gV
Y0hsEpkn4zOqEbnOFVkAfVg3tHX81ADff40GGXR0h0mxYPmOlbtyFycQmeuFyi0u
nUasqd1bOlrBEz0WyH4BF/I4zDpCKmGcOY/My1GvkNEK/0ydQpaRSVLLJs8n4bCQ
KrapPQ2LAIn1B4SxxipZgDuXsWRPsDCjyPWgvjLqWO8HtxGP9RN/FV1pfGfF4QaR
A47qy0yb5CJl6VlcSgsOZj3Mt2/6K6j2c+6g8UyaCqmzQ+qUAlzAJlrsVjrhCyer
Wua6Pn9pi+UCsKziKvZiFSTK8xOUdDJHXJPiLtjGDEO3IwcrIoz4HZkpoL5dJFEf
qNpdWmv22CBeYg5WaC0LItaXHKCGH06Sg9uMB/vZMCaR/Kfd9vORDeYRe6VDgJsa
zR9ZpSbPV+dQ6Liipn8wCOcwHHS6ZF4sWbHE7K+9R8M6D5BYIxh4e2s5vKHFckZh
npz+giWBhOy5hxSiEifECkmT9mk843wUNpwIwi+chw7jEZdxy8bQqjGBnwIDAQAB
oz8wPTAdBgNVHQ4EFgQUPHTGTiz84+hMLJlg9ijHiF78yvswDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGtzS8h+m3wmDAdD
jvg/tZRDup9lrYSIH/MBCDyw9C0j5N3lNJMVw7I17pHbb2k3Jp5uskeX/J1gd6KU
iuXnbafajjf5pPoSpe2Y8qYlF+OWbO9/IzYpzVgxx+T9sUlwzntUvcyErIoDNLv/
tBTeDuswSwKFSJjP7hZk3oHxrpahGl0Y8aMcGOxiCxOXvECFE0YHW/7TQGC6AEjF
4Ronj4BCcOzbIPZaN7hutEElgOW3ns5eKc4hhIx/VCDar141jMKqa4P/TUU23udW
noR5REZw+lXsUKlC4175Kq5HQmHt6PxwqXcd3zMUm6+1CY9mJYft0+Hx5XvdMFrN
ag6TIjyxSdLoO5/zrMKPpgxTr9bHHkMIxt2Kho9ETLYXbOdDFDIdVwfiPImjFfE8
lFxEFcdGDzybRfJfjPgBunJvhwQCfK4DJ6MhNc07ovnIAaWosbr2yYjzB8TggsI1
dUn7sXBsG11VmHc0SXooPYUEzXZd6k0mG4QXEDs/UEHYNNOdAA==
-----END CERTIFICATE-----`,
    },
  },
};
<<<<<<< HEAD
export default knexConfig;
=======
export default knexConfig
>>>>>>> e8aecaa1de091597e501f0e27c8b2ecd71486b33

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
