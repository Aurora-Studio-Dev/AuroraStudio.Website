<template>
  <div class="min-h-screen bg-gray-50 overflow-hidden relative">
    <div ref="gridContainer" class="absolute inset-0 opacity-20 pointer-events-none"></div>
    <div
      class="absolute top-1/3 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-70 animate-float hidden md:block"
    ></div>
    <div
      class="absolute bottom-1/4 right-16 w-32 h-32 bg-indigo-100 rounded-full blur-xl opacity-70 animate-float animation-delay-1000 hidden md:block"
    ></div>
    <div
      class="absolute top-2/3 left-1/4 w-16 h-16 bg-purple-100 rounded-full blur-xl opacity-70 animate-float animation-delay-2000 hidden lg:block"
    ></div>
    <main class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 min-h-screen">
      <section class="flex flex-col items-center justify-center h-[calc(100vh-60px)]">
        <div class="w-full max-w-7xl mx-auto text-center">
          <div class="mb-16 mt-8">
            <h1
              style="font-family: 'SHT'"
              ref="title"
              class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span class="block transform translate-y-10 opacity-0">Unleash your creativity,</span>
              <span class="block transform translate-y-10 opacity-0"
                >software shapes the future.</span
              >
            </h1>
            <p
              ref="subtitle"
              class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto transform translate-y-10 opacity-0"
            >
              探索前沿设计与交互的完美融合，打造卓越的用户体验
            </p>
          </div>
          <div ref="cta" class="mt-16 transform translate-y-20 opacity-0">
            <button
              class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              @click="scrollToSection('products')"
            >
              开始探索
            </button>
          </div>
        </div>
      </section>
      <section id="features" class="py-20">
        <div class="max-w-6xl mx-auto">
          <h2
            ref="sectionTitle1"
            class="text-3xl md:text-4xl font-bold text-center mb-16 transform-element"
          >
            我们的优势
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div
              class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform-element"
            >
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-bolt text-blue-600 text-2xl">
                  <svg
                    t="1755667300333"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6121"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M760.1 64l-150 262.7-41 71.8c-6.1 10.7 1.6 23.9 13.9 23.9h104.7c13.9 0 21.2 16.6 11.8 26.9L410.8 761.9l59.5-178.5 21.1-63.2c3.5-10.4-4.3-21.1-15.2-21.1H277.8c-11.6 0-19.4-12-14.6-22.6l179-393.8c5.2-11.4 16.6-18.8 29.1-18.8h288.8M450.8 0c-25.1 0-47.9 14.7-58.3 37.5L194.7 472.7c-19.3 42.4 11.7 90.5 58.3 90.5h145.5c5.5 0 9.3 5.3 7.6 10.5L256 1024l515.3-558.2c37.8-41 8.8-107.4-47-107.4h-44.8c-6.1 0-10-6.6-6.9-12L870.4 0H450.8z"
                      p-id="6122"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                </i>
              </div>
              <h3 class="text-xl font-semibold mb-3">高效开发</h3>
              <p class="text-gray-600">采用现代技术栈，大幅提升开发效率，缩短项目周期</p>
            </div>

            <div
              class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform-element animation-delay-100"
            >
              <div class="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <i class="fas text-indigo-600 text-2xl">
                  <svg
                    t="1755667258299"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4921"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M753.845117 371.674021l-17.46272 0 0-83.669608c0-59.275012-22.62837-115.203812-63.715137-157.482731-42.170448-43.394323-99.369172-67.291592-161.058163-67.291592-126.040624 0-224.772276 98.731652-224.772276 224.7733l0 83.669608-16.680914 0c-62.788022 0-113.688295 50.900274-113.688295 113.688295L156.467611 842.961784c0 62.788022 50.900274 113.688295 113.688295 113.688295l483.690234 0c62.788022 0 113.688295-50.900274 113.688295-113.688295L867.534436 485.362316C867.532389 422.574295 816.633139 371.674021 753.845117 371.674021zM328.176344 288.005436c0-102.858646 80.573083-183.432753 183.431729-183.432753 50.423413 0 97.093339 19.447934 131.410935 54.762231 33.547047 34.519188 52.021817 80.214926 52.021817 128.670521l0 83.669608L328.176344 371.675044 328.176344 288.005436zM826.191842 842.961784c0 39.956014-32.390711 72.346725-72.346725 72.346725L270.154883 915.308509c-39.956014 0-72.346725-32.390711-72.346725-72.346725L197.808158 485.362316c0-39.956014 32.390711-72.346725 72.346725-72.346725l483.690234 0c39.956014 0 72.346725 32.390711 72.346725 72.346725L826.191842 842.961784z"
                      fill="#272636"
                      p-id="4922"
                    ></path>
                    <path
                      d="M509.932921 580.446905c-11.416004 0-20.670785 9.254781-20.670785 20.670785l0 109.554138c0 11.414981 9.254781 20.670785 20.670785 20.670785 11.416004 0 20.670785-9.254781 20.670785-20.670785L530.603707 601.116667C530.602683 589.701686 521.348925 580.446905 509.932921 580.446905z"
                      fill="#272636"
                      p-id="4923"
                    ></path>
                  </svg>
                </i>
              </div>
              <h3 class="text-xl font-semibold mb-3">安全可靠</h3>
              <p class="text-gray-600">严格的安全标准，确保产品稳定运行，保护用户数据</p>
            </div>

            <div
              class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform-element animation-delay-200"
            >
              <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-paint-brush text-purple-600 text-2xl">
                  <svg
                    t="1755667338904"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7351"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M358.712 462.622c-12.497-12.497-32.758-12.497-45.255 0L193.895 582.183a32 32 0 0 0 0 45.255L313.457 747c6.249 6.25 14.437 9.374 22.627 9.373 8.188-0.001 16.38-3.125 22.627-9.372 12.497-12.497 12.497-32.759 0-45.255l-96.935-96.936 96.935-96.934c12.497-12.496 12.497-32.757 0.001-45.254zM704.812 462.622c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l96.934 96.934-96.935 96.936c-12.496 12.496-12.496 32.758 0.001 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.628-9.373l119.562-119.563c12.496-12.496 12.496-32.758-0.001-45.255L704.812 462.622z"
                      p-id="7352"
                      fill="#2c2c2c"
                    ></path>
                    <path
                      d="M895.601 163.784h-766.64c-35.29 0-64 28.71-64 64v615.615c0 35.29 28.71 64 64 64h766.64c35.29 0 64-28.71 64-64V227.784c0-35.29-28.71-64-64-64z m-30.928 95.858v23.306c0 7.436-6.083 13.52-13.518 13.52h-23.306c-7.435 0-13.518-6.084-13.518-13.52v-23.306c0-7.433 6.083-13.516 13.518-13.516h23.306c7.435 0 13.518 6.083 13.518 13.516z m-81.805 0v23.306c0 7.436-6.083 13.52-13.518 13.52h-23.306c-7.435 0-13.518-6.084-13.518-13.52v-23.306c0-7.433 6.083-13.516 13.518-13.516h23.306c7.435 0 13.518 6.083 13.518 13.516z m-81.806 0v23.306c0 7.436-6.083 13.52-13.518 13.52h-23.306c-7.435 0-13.518-6.084-13.518-13.52v-23.306c0-7.433 6.083-13.516 13.518-13.516h23.306c7.435 0 13.518 6.083 13.518 13.516z m194.481 583.756H129.019a0.53 0.53 0 0 1-0.058-0.058V346.809h766.64v496.532a0.52 0.52 0 0 1-0.058 0.057z"
                      p-id="7353"
                      fill="#2c2c2c"
                    ></path>
                    <path
                      d="M575.04 455.757c-16.29-6.859-35.052 0.785-41.91 17.075L432.447 711.955c-6.858 16.288 0.786 35.053 17.074 41.91a31.892 31.892 0 0 0 12.404 2.517c12.488 0 24.355-7.359 29.506-19.591l100.683-239.124c6.859-16.289-0.786-35.052-17.074-41.91z"
                      p-id="7354"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                </i>
              </div>
              <h3 class="text-xl font-semibold mb-3">精美设计</h3>
              <p class="text-gray-600">融合美学与功能性，打造令人印象深刻的用户界面</p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" class="py-20 transform-element">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">产品</h2>
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div class="w-full md:w-1/2">
              <h3 class="text-1xl md:text-1xl font-semibold mb-4">Aurora Chat Bot</h3>
              <h4 class="text-3xl md:text-3xl font-bold mb-4">不仅仅可以聊天</h4>
              <p class="text-gray-600 mb-6">
                Aurora Chat Bot 提供了一个交互式界面为你更好的使用 AI 模型。
              </p>
              <ul class="list-disc pl-5 mb-6 space-y-3">
                <li>
                  <strong>Fluent Desgin</strong>
                  <br />
                  <p class="inline">
                    基于由
                    <a href="https://www.inkore.net" class="icp text-blue-600">iNKORE</a>
                    开发的 iNKORE.UI.WPF.Modern 设计的 UI 界面，贴合 Windows 11 风格。
                  </p>
                </li>
                <li>
                  <strong>.NET 8.0</strong>
                  <br />
                  <p class="inline">基于 Microsoft.NET8.0 构建的 C# WPF 应用，迅速、高效。</p>
                </li>
                <li>
                  <strong>免费开源</strong>
                  <br />
                  <p class="inline">免费供所有人使用，公开源代码。</p>
                </li>
              </ul>
              <div class="mb-6 bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-500 mb-2">法律版权</p>
                <p class="text-xs text-gray-400 mb-1">
                  Windows 软件「Aurora Chat
                  Bot」已进行中华人民共和国计算机软件著作权登记，一切侵权行为将依法追究。
                </p>
                <p class="text-xs text-gray-400 mb-1">计算机软件著作权登记号:2025SR0102045</p>
                <p class="text-xs text-gray-400">软著登字第14758243号</p>
              </div>
              <div class="flex flex-wrap gap-4">
                <a
                  href="https://acb.aurorastudio.top"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >官网</a
                >
                <a
                  href="https://github.com/Aurora-Studio-Dev/Aurora-Chat-Bot"
                  class="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >GitHub</a
                >
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <img
                src="../assets/image/home/acb.png"
                alt="Aurora Chat Bot 界面展示"
                class="w-full h-auto rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto transform-element">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">联系我们</h2>
            <p class="text-xl text-gray-600 mb-10">来反馈 Bug 与提出建议吧！</p>
            <div class="flex flex-col space-y-6 text-left">
              <div
                class="w-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:translate-y-[-5px]"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 mt-1">
                    <svg
                      class="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm font-medium text-gray-500">电子邮箱</p>
                    <a
                      href="mailto:aurora_studio_team@163.com"
                      class="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 block truncate"
                    >
                      aurora_studio_team@163.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="w-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:translate-y-[-5px]"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 mt-1">
                    <svg
                      class="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1.5m0 0a2 2 0 012-2h5.5M13 11H4"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm font-medium text-gray-500">QQ群</p>
                    <a
                      href="https://qm.qq.com/cgi-bin/qm/qr?k=JoK5CdSH8R1bb40DTmFhCcSI5Um_VB1M&jump_from=webapi&authKey=Mr19qTZMxiRNUUnrm27a3UhQsDR9Ph0PmawMUzSNVevwvjnMQADUKwd326PW4+N2"
                      class="text-xl font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300 flex items-center"
                    >
                      386255002
                      <svg
                        class="w-5 h-5 ml-2 text-green-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="w-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:translate-y-[-5px]"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 mt-1">
                    <svg class="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm font-medium text-gray-500">GitHub</p>
                    <a
                      href="https://github.com/Aurora-Studio-Dev"
                      target="_blank"
                      class="text-xl font-semibold text-gray-800 hover:text-purple-500 transition-colors duration-300 flex items-center"
                    >
                      @Aurora-Studio-Dev
                      <svg
                        class="w-5 h-5 ml-2 text-purple-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const title = ref(null)
const subtitle = ref(null)
const cta = ref(null)
const gridContainer = ref(null)
const sectionTitle1 = ref(null)
let gridGroup = null

onMounted(() => {
  createGridBackground()
  setupHeroAnimations()
  setupScrollAnimations()
  setupCounterAnimations()
  window.addEventListener('resize', handleResize)
})

function setupHeroAnimations() {
  const titleLines = title.value.querySelectorAll('span')
  gsap.to(titleLines, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power2.out',
  })

  gsap.to(subtitle.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.6,
    ease: 'power2.out',
  })

  gsap.to(cta.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 1.2,
    ease: 'power2.out',
  })
}

function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.transform-element')

  animatedElements.forEach((el) => {
    const delay = el.classList.contains('animation-delay-100')
      ? 0.1
      : el.classList.contains('animation-delay-200')
        ? 0.2
        : el.classList.contains('animation-delay-300')
          ? 0.3
          : 0

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      end: 'top 50%',
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: 'power2.out',
        })
      },
    })
  })
}

function setupCounterAnimations() {
  const counters = document.querySelectorAll('.counter')
  const speed = 200

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target')
      const count = +counter.innerText
      const increment = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + increment)
        setTimeout(updateCount, 1)
      } else {
        counter.innerText = target
      }
    }

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      once: true,
      onEnter: updateCount,
    })
  })
}

function createGridBackground() {
  const container = gridContainer.value
  container.innerHTML = ''

  const size = 20
  const cols = Math.ceil(window.innerWidth / size)
  const rows = Math.ceil(window.innerHeight / size)

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')
  container.appendChild(svg)

  gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  svg.appendChild(gridGroup)

  for (let i = 0; i <= cols; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('x1', i * size)
    line.setAttribute('y1', 0)
    line.setAttribute('x2', i * size)
    line.setAttribute('y2', window.innerHeight)
    line.setAttribute('stroke', '#9ca3af')
    line.setAttribute('stroke-width', '0.5')
    gridGroup.appendChild(line)
  }

  for (let i = 0; i <= rows; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('x1', 0)
    line.setAttribute('y1', i * size)
    line.setAttribute('x2', window.innerWidth)
    line.setAttribute('y2', i * size)
    line.setAttribute('stroke', '#9ca3af')
    line.setAttribute('stroke-width', '0.5')
    gridGroup.appendChild(line)
  }

  const lines = gridGroup.querySelectorAll('line')
  gsap.set(lines, { opacity: 0 })

  gsap.to(lines, {
    opacity: 1,
    duration: 1,
    stagger: {
      each: 0.02,
      repeat: -1,
      yoyo: true,
      randomize: true,
    },
    ease: 'sine.inOut',
  })

  gsap.to(gridGroup, {
    x: () => Math.random() * 10 - 5,
    y: () => Math.random() * 10 - 5,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}

function handleResize() {
  createGridBackground()
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  padding-right: var(--el-container-padding, 1rem);
  padding-left: var(--el-container-padding, 1rem);
  margin-right: auto;
  margin-left: auto;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

button {
  cursor: pointer;
}

button:hover {
  transform: scale(1.05) rotate(0.5deg);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.transform-element {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-in-out;
}

@media (max-width: 768px) {
  main {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  h1 {
    font-size: 3rem !important;
  }

  .grid-cols-2 md:grid-cols-4 {
    grid-template-columns: 1fr 1fr;
  }
}

.icon {
  width: 30px;
  height: 30px;
}

.gradient-text {
  background-image: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -10px);
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.5rem !important;
  }

  .grid-cols-1 md:grid-cols-2 lg:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .grid-cols-2 md:grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}
</style>
