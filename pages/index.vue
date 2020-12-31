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
  transition: 'intro',
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
          message: 'Oracle CRM OnDemandのカスタマイズ保守（11社）',
        },
        {
          date: '2014-2016',
          contents: '常駐先アプリ開発エンジニア',
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
          image_uri: '/img/sfdcadmin.jpeg',
        },
        {
          name: 'Oracle 認定資格',
          detail: 'Oracle Certified Java Programmer, Gold SE 7',
          getDate: '2014/9 〜',
          image_uri: '/img/OCPGold.gif',
        },
        {
          name: 'LPIC',
          detail: 'LPIC-1',
          getDate: '2014/11 〜 2019/11',
          image_uri: '',
        },
        {
          name: 'IBM 認定資格',
          detail: 'DB2 10.1 DBA for Linux UNIX and Windows',
          getDate: '2015/1 〜',
          image_uri: '',
        },
        {
          name: 'Oracle 認定資格',
          detail: 'ORACLE MASTER Silver Oracle Database 11g',
          getDate: '2015/7 〜',
          image_uri: '/img/OMSilver.gif',
        },
        {
          name: 'Salesforce 認定資格',
          detail: 'Salesforce Certified Platform Developer I',
          getDate: '2016/8 〜',
          image_uri: '/img/sfdcpd.jpeg',
        },
        {
          name: 'Odyssey 認定資格',
          detail: 'Python 3 エンジニア認定基礎試験',
          getDate: '2017/11 〜',
          image_uri: '/img/pythonce.png',
        },
        {
          name: 'AWS 認定資格',
          detail: 'AWS Certified Solutions Architect - Associate (SAA)',
          getDate: '2020/07 〜',
          image_uri: '/img/awssaa.png',
        },
        {
          name: 'AWS 認定資格',
          detail: 'AWS Certified SysOps Administrator - Associate (SOA)',
          getDate: '2020/10 〜',
          image_uri: '/img/awssoa.png',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
.section {
  padding-left: 3rem !important;
  width: 100%;
}
</style>
