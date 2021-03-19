<template>
<v-container fill-height>
  <div v-if="newsArticles.length">
    <NewsList :newsArticles="newsArticles"></NewsList>
  </div>
    <v-row v-else align="center"
        justify="center">
        <v-col><NoProductsComp/></v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import newsService from '../services/newsService';
  import NewsList from '../components/NewsList.vue';
  import { ArticleType, NewsArticle } from '../types';
  import NoProductsComp from "../components/NoProductsComp.vue";

  @Component({
    components: {
      NewsList,
      NoProductsComp,
    }
  })
  export default class TopStories extends Vue {
    newsArticles: NewsArticle[] = [];

    mounted() {
      newsService.getArticlesByType(ArticleType.Products)
        .then((newsArticles: NewsArticle[]) => {
          this.newsArticles = newsArticles;
        });
    }
  }
</script>
