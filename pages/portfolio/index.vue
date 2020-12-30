<template>
  <div id="about" class="section">
    <about-me class="about" :about-me="aboutRes"></about-me>
    <experience-me
      class="experience"
      :experience-me="experienceRes"
    ></experience-me>
    <skill-me class="skill" :skill-me="skillRes"></skill-me>
    <qualification-me
      class="qualification"
      :qualification-me="qualificationRes"
    ></qualification-me>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'index',
  data() {
    return {
      aboutRes: {
        Name: '田辺　悠人（Haruto Tanabe）',
        Birth: '1989/1/11',
        Address: 'Tokyo',
        Email: 'tana167@yahoo.co.jp',
      },
      experienceRes: [
        {
          date: '2011-2014',
          contents: 'テスター&パッケージカスタマイズ',
          position: 'メンバー',
          message: 'Oracle CRM OnDemandのカスタマイズ保守（11社担当）',
        },
        {
          date: '2014-2016',
          contents: '常駐先デスクトップアプリ開発エンジニア',
          position: 'メンバー',
          message: '某保険会社でのデスクトップアプリ開発（マクロ,Acess,C#)',
        },
        {
          date: '2016-2017',
          contents: 'Salesforce開発エンジニア',
          position: 'サブリーダー',
          message:
            '某金融会社のSalesforceの保守とリプレイス担当。オフシュアへの開発依頼。',
        },
        {
          date: '2017-2018',
          contents: 'Webアプリ開発エンジニア',
          position: 'メンバー',
          message:
            'Webアプリケーションの開発。Java（Spring）やPHP(Wordpress)の開発・保守',
        },
        {
          date: '2018-2020',
          contents: '社内エンジニア',
          position: 'メンバー・リーダー',
          message:
            '社内システムの開発・保守運用。Salesforceの運用、Javaバッチ作成、社内プロダクト開発(Laravel)',
        },
      ],
      skillRes: [
        {
          name: 'CSS',
          parcent: '90',
        },
        {
          name: 'HTML',
          parcent: '90',
        },
      ],
      qualificationRes: [
        {
          name: 'Salesforce 認定資格',
          detail: 'Salesforce Certified Administrator',
          getDate: '2013/10 〜',
        },
        {
          name: 'Oracle 認定資格',
          detail: 'Oracle Certified Java Programmer, Gold SE 7',
          getDate: '2014/9 〜',
        },
        {
          name: 'LPIC',
          detail: 'LPIC-1',
          getDate: '2014/11 〜 2019/11',
        },
        {
          name: 'IBM 認定資格',
          detail: 'DB2 10.1 DBA for Linux UNIX and Windows',
          getDate: '2015/1 〜',
        },
        {
          name: 'Oracle 認定資格',
          detail: 'ORACLE MASTER Silver Oracle Database 11g',
          getDate: '2015/7 〜',
        },
        {
          name: 'Salesforce 認定資格',
          detail: 'Salesforce Certified Platform Developer I',
          getDate: '2016/8 〜',
        },
        {
          name: 'Odyssey 認定資格',
          detail: 'Python 3 エンジニア認定基礎試験',
          getDate: '2017/11 〜',
        },
        {
          name: 'AWS 認定資格',
          detail: 'AWS Certified Solutions Architect - Associate (SAA)',
          getDate: '2020/07 〜',
        },
        {
          name: 'AWS 認定資格',
          detail: 'AWS Certified SysOps Administrator - Associate (SOA)',
          getDate: '2020/10 〜',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.section {
  padding-left: 3rem !important;
  width: 100%;
}
</style>
