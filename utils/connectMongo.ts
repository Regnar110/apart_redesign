
import { MongoClient } from 'mongodb'

const uri = process.env.ATLAS_URI

let client
let clientPromise

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise as Promise<MongoClient>


// Jest to plik który inicjalizuje połączenie z naszym kawałkiem bazdy mondo DB.