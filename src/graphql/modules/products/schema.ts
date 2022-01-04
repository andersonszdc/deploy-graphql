export default `
type Product {
  name: String
  description: String
}

type Query {
  products: [Product]
}
`