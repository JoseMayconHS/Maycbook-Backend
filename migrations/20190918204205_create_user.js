
exports.up = function(knex) {
  return knex
  	.schema
  	.createTable('user', table => {
  		table
        .increments('id')
        .primary()

  		table
        .string('name')
        .notNull()

  		table
        .string('email')
        .unique()
        .notNull()
        
  		table
        .string('password')
        .notNull()

      table
        .string('genre', 1)
        .notNull()

      table 
        .string('image')
        .notNull()
        .defaultTo('default.jpg')

      table
        .timestamp('created_at', { precision: 6 })
        .defaultTo(knex.fn.now(6))

      table
        .timestamp('updated_at', { precision: 6 })
        .defaultTo(knex.fn.now(6))

  	})
};

exports.down = function(knex) {
  return knex
  	.schema
  	.dropTableIfExists('user')
};
