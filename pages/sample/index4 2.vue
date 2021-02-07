<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app dark class="primary">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                <span class="font-weight-bold">Al-Mehmood</span>
              </v-list-item-title>
              <v-list-item-subtitle>Transport Company</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-group
            v-for="navLink in navLinks"
            :key="navLink.text"
            no-action
          >
            <v-list-item slot="activator" :to="navLink.route">
              <v-list-item-icon>
                <v-icon>{{ navLink.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ navLink.text }}</v-list-item-title>
            </v-list-item>
            <div v-for="sub in navLink.subLinks" :key="sub.text">
              <v-list-item :to="sub.route">
                <v-list-item-title>{{ sub.text }}</v-list-item-title>
              </v-list-item>
            </div>
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
      {
        icon: 'dashboard-icon.svg',
        text: 'ホーム',
        route: '/company/dashboard/index',
      },
      {
        icon: 'member-icon.svg',
        text: 'メンバー',
        route: '/company/member/index',
        subLinks: [
          { text: 'メンバー一覧', route: '/company/member/index' },
          { text: 'メンバー追加', route: '/company/member/form' },
          { text: 'メンバー一括追加／更新', route: '/company/member/csv' },
          { text: 'メンバー取込', route: '/company/member/import' },
        ],
      },
      {
        icon: 'message-icon.svg',
        text: 'メッセージ',
        route: '/company/message/index',
      },
      {
        icon: 'report-icon.svg',
        text: '回答レポート',
        route: '/company/report/index',
      },
      {
        icon: 'notification-icon.svg',
        text: 'お知らせ',
        route: '/company/notification',
      },
      { icon: 'help-icon.svg', text: 'ヘルプ', route: '/company/setting/faq' },
      {
        icon: 'settings-icon.svg',
        text: '設定',
        route: '/company/setting/index',
        subLinks: [
          { text: 'アンケート設定', route: '/company/setting/enq' },
          { text: 'メッセージ設定', route: '/company/setting/message' },
          { text: 'アカウント管理', route: '/company/setting/account' },
          { text: 'セキュリティ設定', route: '/company/setting/security' },
          { text: 'エンサービスとの連携', route: '/company/setting/import' },
          {
            text: '適性テスト結果取込',
            route: '/company/setting/talent_import',
          },
        ],
      },
    ],
  }),
})
</script>
