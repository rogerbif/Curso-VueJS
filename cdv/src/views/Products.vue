<template>
  <v-container fill-height>
    <!-- <v-col v-if="newProducts">
      <div v-if="products.length">
        <ProductList :products="products"></ProductList>
      </div>
      <v-row v-else align="center" justify="center">
        <v-col><NoProductsComp /></v-col>
      </v-row>
    </v-col>
    <v-col v-else>
      <NewProductsComp @productAdded="AddProduct" />
    </v-col> -->

    <NewProductsComp @productAdded="addProduct" />
    <ProductList :products="products"></ProductList>

  </v-container>
</template>

<script>
import ProductList from "../components/ProductList.vue";
//import NoProductsComp from "../components/NoProductsComp.vue";
import NewProductsComp from "../components/NewProductsComp.vue";

export default {
  components: {
    //NoProductsComp,
    NewProductsComp,
    ProductList
  },
  data() {
    return {
      products: [
        { id: 1,
          name: 'Caneta Azul',
          description: 'Uma linda caneta azul',
          price: '1,99',
          dateString: '21/03/2021',
          baseImageName: 'azul',
          productType: 'canetas',
          isFavourite: false},
      ],
      newProducts: false
    }
  },
  methods: {
    addProduct(product){
      const sameName = p => p.name === product.name
      const reallyNew = this.products.filter(sameName).length == 0
      if(reallyNew){
        this.products.push({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          dateString: product.dateString,
          baseImageName: product.baseImageName,
          productType: product.productType,
          isFavourite: product.isFavourite
        })
      }
    }
  }
}
</script>
