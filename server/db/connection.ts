import knex from 'knex'
import config from './knexfile'
type Environment = 'production' | 'development' | 'test'

const env = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[env])

export default connection
