exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("educations", table => {
            table.integer("userId").notNullable().unique();
            table.string("name").notNullable();
            table.string("academicLevel").notNullable();
            table.string("dateOfGraduation").notNullable();
            table.decimal("average").notNullable();

            table
                .foreign("userId")
                .references("userId")
                .inTable("users")
                .onDelete("cascade");
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTable("educations")]);
};