<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <template>
          <v-card class="pa-4 mx-auto" max-width="365" min-height="485">
            <v-form>

              <!-- Aqui é o nome do Produto -->
              <v-text-field
                v-model="name"
                label="Nome"
                placeholder="Nome do Produto"
                required
              ></v-text-field>

              <!-- Aqui é o carrousell de imagems -->
              <v-slide-group multiple show-arrows>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>

                <v-slide-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>

                <v-slide-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <!-- Esse é um file input precisa estudar como fazer -->
              <!-- <v-file-input
                multiple
                small-chips
                truncate-length="15"
              ></v-file-input> -->

              <!-- Aqui adiciona o Descrição -->
              <v-text-field 
                v-model="description"
                label="Descrição"
                placeholder="Informe a descrição"
                required
              ></v-text-field>

              <!-- Aqui adiciona o ID -->
              <v-text-field 
                v-model="id"
                label="Código"
                placeholder="Cód. ou automático"
                outlined
                append-icon="mdi-barcode"
                required
              ></v-text-field>

              <!-- Aqui adiciona o Preço -->
              <v-text-field
                v-model="price"
                label="Preço"
                placeholder="R$ 9,99"
                required
              ></v-text-field>

              <v-row class="fill-height" align="center" justify="center">
                <v-btn outlined tile>
                  Mais campos
                  <v-icon right dark> mdi-plus </v-icon></v-btn
                >

                <!-- Aqui chama a função add que salva o item e limpa os campos -->
                <v-btn color="primary" @click="add" tile>
                  Salvar <v-icon right dark> mdi-cloud-upload </v-icon></v-btn
                >
              </v-row>
            </v-form>
          </v-card>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        id: '',
        name: '',
        description: '',
        price: '',
        dateString: '',
        baseImageName: '',
        productType: '',
        isFavourite: false
    }
  },
  methods: {
    add(){
      this.$emit('productAdded', {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        dateString: new Date(),
        baseImageName: this.baseImageName,
        productType: this.productType,
        isFavourite: false
      })
      this.id=''
      this.name=''
      this.description=''
      this.price=''
      this.dateString=''
      this.baseImageName=''
      this.productType=''
      this.isFavourite=false
    }
  }
}
</script>
