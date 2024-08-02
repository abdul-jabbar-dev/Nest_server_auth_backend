"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function UsersTable(knex) {
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
exports.default = schema;
//# sourceMappingURL=schema.js.map