exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("students", table => {
            table.integer("userId").notNullable().unique();
            table.string("DOB").notNullable();
            table.string("gender").notNullable();
            table.string("language").notNullable();
            table.string("citizenship").notNullable();
            table.string("ECA").notNullable();

            table
                .foreign("userId")
                .references("userId")
                .inTable("users")
                .onDelete("cascade");
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTable("students")]);
};