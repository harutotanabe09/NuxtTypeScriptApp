<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app class="sidemenu">
        <v-list>
          <div>Menu Top</div>
          <v-list-group v-for="menu in menus" :key="menu.text" no-action>
            <v-list-item slot="activator" :to="menu.route">
              <img class="icon" :alt="menu.text" />
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
