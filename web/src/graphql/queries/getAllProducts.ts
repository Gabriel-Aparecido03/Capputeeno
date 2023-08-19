export const QUERIE_GET_ALL_PRODUCTS = ` query GET_PRODUCTS($page: Int, $perPage: Int, $sortFilter: ProductFilter, $sortOrder: String, $sortField: String ){
  allProducts(page: $page, perPage: $perPage, sortOrder: $sortOrder, sortField: $sortField, filter: $sortFilter) {
  id
  name
  imageUrl: image_url
  priceInCents: price_in_cents
  category
  }
}`