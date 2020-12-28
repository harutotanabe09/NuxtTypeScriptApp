<template>
  <div class="side-menu">
    <div class="toggle">
      <div class="switch" @click="isOpen = !isOpen">
        <span class="line"></span>
      </div>
      <transition name="slide">
        <div v-show="isOpen" class="opened">
          <div v-show="isOpen" class="close" @click="isOpen = false"></div>
        </div>
      </transition>
    </div>
    <div class="logowrapper">
      <div v-show="isOpen" class="name"></div>
    </div>
    <side-menu-item
      v-for="item in items"
      :key="item.label"
      class="item"
      :item="item"
      :is-open="isOpen"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideMenu',
  data() {
    return {
      isOpen: true,
      items: [
        {
          label: '1.ホーム',
        },
        {
          label: '2.メニュー',
        },
        {
          label: '3.メニュー',
        },
        {
          label: '4.メニュー',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
$switch-size: 46px;
$open-width: 259px;

.side-menu {
  min-width: $side-menu-width;
  box-shadow: 0 3px 10px $black-color;
  background-color: $white-color;
  > .toggle {
    display: flex;
    overflow-x: hidden;
    > .switch {
      position: relative;
      margin-top: 7px;
      margin-bottom: 11px;
      margin-left: 4px;
      width: $switch-size;
      min-width: $switch-size;
      height: $switch-size;
      border-radius: $switch-size / 2;
      background-color: $default-color;
      cursor: pointer;
      > .line {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 2px;
        margin: auto;
        background-color: $black-color;
        border-radius: 1px;
        &::before,
        &::after {
          content: '';
          position: absolute;
          display: block;
          height: 100%;
          background-color: inherit;
          border-radius: 1px;
        }
        &::before {
          width: 100%;
          top: -6px;
        }
        &::after {
          width: 50%;
          top: 6px;
        }
      }
    }
    > .opened {
      position: relative;
      width: $open-width;
      &.slide-enter-active,
      &.slide-leave-active {
        transition: width 0.5s;
        z-index: -1;
      }
      &.slide-enter,
      &.slide-leave-to {
        width: 0;
      }
      > .close {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 7px;
        width: $switch-size;
        height: $switch-size;
        border-radius: $switch-size / 2;
        background-color: $default-color;
        cursor: pointer;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          height: 10px;
          width: 10px;
          border-top: solid 2px $black-color;
          border-left: solid 2px $black-color;
        }
      }
    }
  }
  > .logowrapper {
    margin-bottom: 10px;
    display: flex;
    > .logo {
      width: 36px;
      height: 32px;
      display: block;
      margin-left: 11px;
    }
    > .name {
      margin-left: 14px;
      overflow-x: hidden;
      > .img {
        width: 136px;
      }
    }
  }
  > .item {
    margin-bottom: 11px;
  }
}
</style>
