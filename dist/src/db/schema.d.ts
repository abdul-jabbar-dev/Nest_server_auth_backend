import { Knex } from 'knex';
declare function UsersTable(knex: Knex): Promise<void>;
declare const schema: {
    UsersTable: typeof UsersTable;
};
export default schema;
