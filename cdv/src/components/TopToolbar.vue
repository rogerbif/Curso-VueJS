<template>
  <div>
    <v-app-bar app fixed dense>
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!search">
        <v-btn icon color="pink" @click="activeSearch">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div v-else>
          <v-text-field :label="title" append-icon="mdi-magnify"></v-text-field>
          <v-btn icon color="pink" @click="activeSearch">
            <v-icon>mdi-close</v-icon>
          </v-btn>
      </div>
      <div>
        <v-switch
          v-model="$vuetify.theme.dark"
          color="dark"
          inset
          hide-details
          label=""
        ></v-switch>
      </div>
    </v-app-bar>

    <v-navigation-drawer app fixed v-model="showMenu">
      <v-list dense>
        <v-list-item @click="doNothing">
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="doNothing">
          <v-list-item-action>
            <v-icon>help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class TopToolbar extends Vue {
  @Getter("title", { namespace: "topToolbar" }) title!: string;

  showMenu: boolean = false;
  search: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  doNothing(): void {}

  activeSearch(): void {
    this.search = !this.search;
  }
}
</script>