<template>
  <!-- Les view(route) sont accessible a partir de l'url versus les composants qui sont accessible a partir des autres composants -->
    <MainNav
    :toggle="toggleSideBar"
    />
    <div class="max-w-screen-xl mx-auto">
    <RouterView
    :inventory="inventory"
    />
    <MainFooter />
    <SideBar
    v-if="showSideBar"
    :toggle="toggleSideBar"
    :cart="cart"
    />
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import SideBar from '@/components/SideBar.vue'
import MainNav from '@/components/MainNav.vue'
import products from '@/products.json'

export default {
  components: {
    MainFooter,
    SideBar,
    MainNav
  },
  data () {
    return {
      showSideBar: false,
      inventory: products,
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>
