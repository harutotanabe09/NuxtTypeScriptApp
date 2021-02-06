<template>
  <v-navigation-drawer v-model="drawer" class="sidemenu">
    <v-list>
      <div class="top">Menu Top</div>
      <v-list-group v-for="menu in menus" :key="menu.text" no-action>
        <v-list-item slot="activator" :to="menu.route">
          <img class="icon" :alt="menu.text" />
          <v-list-item-title>{{ menu.text }}</v-list-item-title>
          <div v-if="menu.subLinks" class="test">></div>
        </v-list-item>
        <div v-for="sub in menu.subLinks" :key="sub.text" class="submenu">
          <v-list-item :to="sub.route">
            <v-list-item-title>{{ sub.text }}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppSideMenu',
  props: {
    menus: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.app-button {
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  background-color: #f6bfbc;
}
</style>
