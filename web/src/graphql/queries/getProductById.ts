export const GET_PRODUCTS_BY_ID = ` query GET_PRODUCT_BY_ID($id: ID!) {
  Product(id: $id){
  id
  name
  description
  category
  imageUrl: image_url
  priceInCents: price_in_cents
  sales
  createdAt: created_at
  }
}`