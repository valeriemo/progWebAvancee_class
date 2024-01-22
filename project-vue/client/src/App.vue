<template>
  <!-- Les view(route) sont accessible a partir de l'url versus les composants qui sont accessible a partir des autres composants -->
    <MainNav
    :toggle="toggleSideBar"
    :totalQuantity="totalQuantity"
    />
    <div class="max-w-screen-xl mx-auto">
    <RouterView
    :inventory="inventory"
    :add="addToCart"
    :addInv="addInventory"
    :updateInv="updateInventory"
    :removeInv="removeInventory"
    :remove="removeItem"
    />
    <MainFooter />
    <SideBar
    v-if="showSideBar"
    :toggle="toggleSideBar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
    />
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import SideBar from '@/components/SideBar.vue'
import MainNav from '@/components/MainNav.vue'
import ProductDataService from '@/services/ProductDataService.js'

export default {
  components: {
    MainFooter,
    SideBar,
    MainNav
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  data () {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    addToCart (product, index) {
      if (isNaN(this.inventory[index].quantity)) this.inventory[index].quantity = 0
      // on assigne la valeur 0 si le produit n'existe pas dans le tableau cart
      if (!this.cart[product]) this.cart[product] = 0
      // on ajouter a partir de l'index la quantité (lie au input avec v-model) dans le tableau inventory
      this.cart[product] += this.inventory[index].quantity
      this.inventory[index].quantity = 0 // on reinitialise la quantité de l'input a 0
      // console.log(this.cart)
    },
    removeItem (name) {
      delete this.cart[name]
    },
    addInventory (product) {
      this.inventory.push(product)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].description = data.description
      this.inventory[index].price = data.price
      this.inventory[index].category = data.category
      this.inventory[index].photo = data.photo
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  }
}

</script>
