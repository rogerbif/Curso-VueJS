<template>
  <v-container fill-height>
    <v-col v-if="newProducts">
      <div v-if="newsArticles.length">
        <NewsList :newsArticles="newsArticles"></NewsList>
      </div>
      <v-row v-else align="center" justify="center">
        <v-col><NoProductsComp /></v-col>
      </v-row>
    </v-col>
    <v-col v-else>
      <NewProductsComp/>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import newsService from "../services/newsService";
import NewsList from "../components/NewsList.vue";
import { ArticleType, NewsArticle } from "../types";
import NoProductsComp from "../components/NoProductsComp.vue";
import NewProductsComp from "../components/NewProductsComp.vue";

@Component({
  components: {
    NewsList,
    NoProductsComp,
    NewProductsComp,
  },
})
export default class TopStories extends Vue {
  newsArticles: NewsArticle[] = [];
  newProducts: boolean = false;

  mounted() {
    newsService
      .getArticlesByType(ArticleType.Products)
      .then((newsArticles: NewsArticle[]) => {
        this.newsArticles = newsArticles;
      });
  }
}
</script>
