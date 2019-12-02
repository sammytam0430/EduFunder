exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("schoolsOfInterest", table => {
            table.increments("schoolID").primary();
            table.integer("userId").notNullable();
            table.string("name").notNullable();
            table.string("fieldOfStudy").notNullable();
            table.string("academicLevel").notNullable();
            table.string("startingDate").notNullable();

            table
                .foreign("userId")
                .references("userId")
                .inTable("users")
                .onDelete("cascade");
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTable("schoolsOfInterest")]);
};