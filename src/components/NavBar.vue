<template>
  <div class="navbar-container">
    <div class="message-container">
      <Message severity="error">
        春节佳节，祥瑞盈门。愿君岁岁安康，似 “四时无疾疫，安息悦晨昏”；更祝新岁财源如
        春潮带雨晚来急，野渡无人舟自横” 般不期而至、充盈流转，阖府同沐春晖。 Aurora
        祝你新的一年财源滚滚、学业进步、事业有成！</Message
      >
      <Message severity="warn" icon="pi pi-info-circle">
        Please note! We are still in the process of building this website. Currently, it contains
        many fake examples used to temporarily fill the pages. Do not rely too heavily on the
        content of this website. During this process, we hope more community developers will join us
        in developing and maintaining the site!
      </Message>
    </div>
    <div class="menubar-container">
      <Menubar :model="items" class="navbar-blur">
        <template #start>
          <img src="@/assets/logo.svg" height="40" style="margin: 5px 25px 5px 10px" alt="Logo" />
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
          <router-link
            v-if="item.route"
            v-ripple
            :to="item.route"
            class="flex items-center router-link"
            active-class="router-link-active"
            v-bind="props.action"
          >
            <span>{{ item.label }}</span>
            <Badge
              v-if="item.badge"
              :class="{ 'ml-auto': !root, 'ml-2': root }"
              :value="item.badge"
            />
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
              >{{ item.shortcut }}</span
            >
            <i
              v-if="hasSubmenu"
              :class="[
                'pi pi-angle-down ml-auto',
                { 'pi-angle-down': root, 'pi-angle-right': !root },
              ]"
            ></i>
          </router-link>
          <a v-else v-ripple class="flex items-center" v-bind="props.action">
            <span>{{ item.label }}</span>
            <Badge
              v-if="item.badge"
              :class="{ 'ml-auto': !root, 'ml-2': root }"
              :value="item.badge"
            />
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
              >{{ item.shortcut }}</span
            >
            <i
              v-if="hasSubmenu"
              :class="[
                'pi pi-angle-down ml-auto',
                { 'pi-angle-down': root, 'pi-angle-right': !root },
              ]"
            ></i>
          </a>
        </template>
        <template #end> </template>
      </Menubar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
])
</script>

<style scoped>
.navbar-container {
  display: flex;
  flex-direction: column;
}

.message-container {
  margin-bottom: 20px;
}

.menubar-container {
  width: 100%;
}

.navbar-blur {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  margin: 10px;
  z-index: 1000;
}

.router-link {
  text-decoration: none;
  color: inherit;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.router-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.router-link:hover::before {
  transform: translateX(100%);
}

.router-link:hover {
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transform: translateY(-2px);
}

.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  font-weight: 600;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.05);
}

.dark .navbar-blur {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .router-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.dark .router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
