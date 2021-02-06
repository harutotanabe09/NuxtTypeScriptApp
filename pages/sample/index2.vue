<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app class="sidemenu">
        <v-list>
          <div>Menu Top</div>
          <v-list-group v-for="menu in menus" :key="menu.text" no-action>
            <v-list-item slot="activator" :to="menu.route">
              {{ menu.icon }}
              <v-list-item-title>{{ menu.text }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="sub in menu.subLinks" :key="sub.text">
              <v-list-item-title :to="sub.route">{{
                sub.text
              }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sample',
  layout: 'normal',
  data: () => ({
    drawer: true,
    menus: [
      { icon: '', text: 'Dashboard', route: '/' },
      { icon: '', text: 'Ratings', route: '/ratings' },
      {
        icon: '',
        text: 'Drivers',
        route: '/drivers',
        subLinks: [
          { text: 'Add Driver1', route: '/drivers/add1' },
          { text: 'Add Driver2', route: '/drivers/add2' },
        ],
      },

      {
        icon: '',
        text: 'Manager',
        route: '/managers',
        subLinks: [
          { text: 'Add Manager', route: '/managers/add' },
          { text: 'Managers', route: '/managers' },
        ],
      },
      { icon: '', text: 'Manage Users', route: '/users' },
    ],
  }),
})
</script>
