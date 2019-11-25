exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("educations", table => {
            table.increments("educationId").primary();
            table.integer("userId").notNullable()
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