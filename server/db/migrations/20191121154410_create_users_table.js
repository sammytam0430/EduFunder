exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("users", table => {
            table.increments("userId").primary("PK_User");
            table.string("userType").notNullable();
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
            table.string("image");
            table.string("name").notNullable().defaultTo("New User");
            table.bigInteger("phoneNumber").notNullable().defaultTo(0);
            table.string("city").notNullable().defaultTo("Not Specified");
            table.string("country").notNullable().defaultTo("Not Specified");
            table.string("postalcode").notNullable().defaultTo("Not Specified");
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTable("users")]);
};