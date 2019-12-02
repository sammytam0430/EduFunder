exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("donors", table => {
            table.integer("userId").notNullable().unique();
            table.string("wedsite").notNullable();
            table.string("identification").notNullable();

            table
                .foreign("userId")
                .references("userId")
                .inTable("users")
                .onDelete("cascade");
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTable("donors")]);
};