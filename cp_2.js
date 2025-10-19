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