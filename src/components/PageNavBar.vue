<template>
  <nav
    style="font-family: 'SHT'"
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-500"
    :class="{ 'py-2 shadow-md': isScrolled, 'py-4 shadow-sm': !isScrolled }"
    ref="navbar"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center space-x-2" ref="logo">
          <span
            class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            AURORA
          </span>
        </router-link>

        <ul class="hidden md:flex items-center space-x-8" ref="navLinks">
          <li v-for="(item, index) in navItems" :key="index">
            <template v-if="item.external">
              <a
                :href="item.path"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-700 font-medium relative transition-colors duration-300 hover:text-blue-600"
              >
                {{ item.name }}
                <span
                  class="absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                  style="width: 0"
                ></span>
              </a>
            </template>
            <template v-else>
              <router-link
                :to="item.path"
                class="text-gray-700 font-medium relative transition-colors duration-300"
                :class="{ 'text-blue-600': isActive(item.path) }"
                @click="handleNavClick(item.path)"
                ref="navLink"
                custom
                v-slot="{ href, navigate }"
              >
                <a :href="href" @click="navigate">
                  {{ item.name }}
                  <span
                    class="absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                    :style="{
                      width: isActive(item.path) ? '100%' : '0',
                      transformOrigin: isActive(item.path) ? 'left' : 'right',
                    }"
                  ></span>
                </a>
              </router-link>
            </template>
          </li>
        </ul>

        <button
          class="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2"
          @click="toggleMobileMenu"
          ref="mobileMenuBtn"
          aria-label="Toggle menu"
        >
          <i class="fa fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <div
      class="md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out"
      :style="{
        maxHeight: isMobileMenuOpen ? '300px' : '0px',
        opacity: isMobileMenuOpen ? '1' : '0',
        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
      }"
      ref="mobileMenu"
    >
      <ul class="px-4 py-2 space-y-3" ref="mobileNavItems">
        <li v-for="(item, index) in navItems" :key="index">
          <template v-if="item.external">
            <a
              :href="item.path"
              target="_blank"
              rel="noopener noreferrer"
              class="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {{ item.name }}
            </a>
          </template>
          <template v-else>
            <router-link
              :to="item.path"
              class="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              :class="{ 'text-blue-600 font-semibold': isActive(item.path) }"
              @click="handleMobileNavClick(item.path)"
              custom
              v-slot="{ href, navigate }"
            >
              <a :href="href" @click="navigate">
                {{ item.name }}
              </a>
            </router-link>
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PageNavBar',
  setup() {
    const route = useRoute()

    const navItems = ref([
      { name: '首页', path: '/' },
      { name: '关于', path: '/about' },
      { name: '文档', path: 'https://docs.aurorastudio.top/', external: true },
      { name: '账户中心', path: 'https://account.aurorastudio.top/', external: true },
    ])

    const isMobileMenuOpen = ref(false)
    const isScrolled = ref(false)

    const navbar = ref(null)
    const logo = ref(null)
    const navLinks = ref(null)
    const mobileMenu = ref(null)
    const mobileMenuBtn = ref(null)
    const navLinkElements = ref([])
    const mobileNavItems = ref(null)

    const isActive = (path) => {
      return path === '/' ? route.path === path : route.path.startsWith(path)
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const handleMobileNavClick = (path) => {
      toggleMobileMenu()
      handleNavClick(path)
    }

    const handleNavClick = (path) => {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: 0,
        ease: 'power2.inOut',
      })
    }

    const initAnimations = () => {
      gsap.from(navbar.value, {
        duration: 0.8,
        y: -50,
        opacity: 0,
        ease: 'power2.out',
      })

      ScrollTrigger.create({
        trigger: document.body,
        start: 'top 10px',
        end: 'bottom bottom',
        onUpdate: (self) => {
          isScrolled.value = self.scrollY > 10
        },
      })

      watch(isScrolled, (newVal) => {
        gsap.to(navbar.value, {
          duration: 0.5,
          backgroundColor: newVal ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          boxShadow: newVal
            ? '0 4px 20px -2px rgba(0, 0, 0, 0.1)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          ease: 'power1.inOut',
        })

        gsap.to(logo.value, {
          duration: 0.3,
          scale: newVal ? 0.9 : 1,
          ease: 'power1.inOut',
        })
      })

      gsap.from(navLinkElements.value, {
        duration: 0.6,
        y: 10,
        opacity: 0,
        stagger: 0.15,
        delay: 0.3,
        ease: 'power2.out',
      })

      gsap.from(logo.value, {
        duration: 0.6,
        x: -20,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out',
      })

      navLinkElements.value.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            duration: 0.3,
            y: -2,
            scale: 1.03,
            ease: 'power1.inOut',
          })
        })

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            duration: 0.3,
            y: 0,
            scale: 1,
            ease: 'power1.inOut',
          })
        })
      })

      watch(isMobileMenuOpen, (newVal) => {
        gsap.to(mobileMenuBtn.value.querySelector('i'), {
          duration: 0.4,
          rotation: newVal ? 90 : 0,
          ease: 'power1.inOut',
        })

        if (mobileNavItems.value && mobileNavItems.value.children) {
          const items = Array.from(mobileNavItems.value.children)

          if (newVal) {
            items.forEach((item, index) => {
              gsap.fromTo(
                item,
                { y: 10, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.3,
                  delay: 0.1 * index,
                  ease: 'power2.out',
                },
              )
            })
          }
        }
      })

      watch(
        () => route.path,
        (newPath) => {
          const activeIndex = navItems.value.findIndex(
            (item) => newPath === item.path || newPath.startsWith(item.path),
          )

          if (activeIndex !== -1 && navLinkElements.value[activeIndex]) {
            gsap.fromTo(
              navLinkElements.value[activeIndex],
              { scale: 1.05, color: '#3b82f6' },
              {
                scale: 1,
                color: '#2563eb',
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)',
              },
            )
          }
        },
      )
    }

    onMounted(() => {
      navLinkElements.value = Array.from(document.querySelectorAll('[ref="navLink"] a'))

      initAnimations()

      window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 10
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', () => {})
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    })

    return {
      navItems,
      isMobileMenuOpen,
      isScrolled,
      navbar,
      logo,
      navLinks,
      mobileMenu,
      mobileMenuBtn,
      mobileNavItems,
      toggleMobileMenu,
      handleNavClick,
      handleMobileNavClick,
      isActive,
    }
  },
}
</script>

<style scoped>
::v-deep .router-link-exact-active,
::v-deep .router-link-active {
  text-decoration: none !important;
}

::v-deep .fa-bars {
  transition: transform 0.3s ease-in-out;
}
</style>
