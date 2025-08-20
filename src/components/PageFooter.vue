<template>
  <footer class="relative bg-gray-50 py-20 overflow-hidden">
    <div ref="footerDecor" class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <svg class="w-full h-full text-blue-500 opacity-10" viewBox="0 0 1920 1080" fill="none">
        <path
          d="M0 200 C 400 100, 800 300, 1200 200, 1600 100, 1920 200, 1920 200 Z"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center"
    >
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 style="font-family: 'SHT'" class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Aurora Studio
          </h2>
          <p class="text-gray-600 max-w-md">Unleash your creativity, software shapes the future.</p>
        </div>
        <div class="w-full md:w-2/3 flex flex-col md:flex-row justify-start md:justify-end gap-8">
          <div class="flex flex-col">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">产品</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://acb.aurorastudio.top"
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                  >Aurora Chat Bot</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/Aurora-Studio-Dev/SimpleSSH"
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                  >SimpleSSH</a
                >
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">资源</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://docs.aurorastudio.top"
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                  >文档中心</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/Aurora-Studio-Dev"
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                  >开源项目</a
                >
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">社区</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://qm.qq.com/cgi-bin/qm/qr?k=JoK5CdSH8R1bb40DTmFhCcSI5Um_VB1M&jump_from=webapi&authKey=Mr19qTZMxiRNUUnrm27a3UhQsDR9Ph0PmawMUzSNVevwvjnMQADUKwd326PW4+N2"
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                  >QQ 群</a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61559123580368"
                  class="text-gray-500 hover:text-blue-600 transition-colors"
                  >Facebook</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-between text-gray-500">
        <p class="mb-4 md:mb-0">
          Copyright © 2025 Aurora Studio. All right reserved.<br />
          <a class="icp" href="https://beian.miit.gov.cn/"> 粤ICP备2025371287号-1 </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const footerDecor = ref(null)

onMounted(() => {
  if (footerDecor.value) {
    const path = footerDecor.value.querySelector('path')
    if (path) {
      gsap.to(path, {
        attr: { d: 'M0 150 C 300 250, 700 100, 1100 200, 1500 300, 1920 150, 1920 150 Z' },
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }
})
</script>

<style scoped>
footer {
  position: relative;
  z-index: 10;
}

footer svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

footer path {
  fill: none;
  stroke: currentColor;
  stroke-width: 12;
  stroke-linecap: round;
  opacity: 0.1;
}

.icp {
  position: relative;
  text-decoration: none;
  color: #007bff;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #007bff;
    left: 0;
    bottom: -2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
