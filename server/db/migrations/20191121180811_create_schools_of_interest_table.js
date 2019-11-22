exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("schoolsOfInterest", table => {
            table.integer("userId").notNullable().unique();
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