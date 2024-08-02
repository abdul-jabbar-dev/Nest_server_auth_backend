exports.up = function (knex) {
    return knex.schema.createTable("Users", (table) => {
        table.increments("id").primary();
        table.string("firstName");
        table.text("lastName");
        table.text("email");
        table.text("password");
        table.timestamps(true, true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("Users");
};
//# sourceMappingURL=20240802014432_Users.js.map