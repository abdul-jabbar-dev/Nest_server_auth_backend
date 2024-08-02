/* eslint-disable prettier/prettier */
import { Knex } from 'knex';
  async function UsersTable(knex: Knex): Promise<void> {
  return knex.schema.createTable("User", (t) => {
    t.increments("id");
    t.text("firstName");
    t.text("lastName");
    t.string("password");
    t.string("email");
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}
const schema = { UsersTable };
export default schema