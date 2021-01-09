'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenssagesSchema extends Schema {
  up () {
    this.create('menssages', (table) => {
      table.increments()
      table.string("message",250).notNullable()
      table.string("email",250).notNullable()
      table.string("name",250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('menssages')
  }
}

module.exports = MenssagesSchema
