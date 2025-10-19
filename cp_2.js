// Fetching the data to use in the product dashboard
function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products") //The provided link for the products
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
      return response.json()
    })
    .then(data => { //this is here to log each of the names 
      data.forEach(product => {
        console.log("Product name:", product.fields.name)
      })
    })
    .catch(error => { // here to log any fetched errors
      console.error("Fetch error in fetchProductsThen():", error.message)
    })
}

// Calls upon the data and checks if the fetch fails
async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products"); //same link given
    if (!response.ok) {
      throw new Error(`HTTP Error!! Status: ${response.status}`)
    }
    const products = await response.json()
    displayProducts(products)
  } catch (error) {
    handleError(error)
  }
}
