<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const titleRef = ref<HTMLHeadingElement>()
const subtitleRef = ref<HTMLParagraphElement>()
const buttonGroupRef = ref<HTMLDivElement>()

onMounted(() => {
  if (titleRef.value && subtitleRef.value && buttonGroupRef.value) {
    gsap
      .timeline({
        delay: 0.5,
        ease: 'power3.out',
      })
      .from(titleRef.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })
      .from(
        subtitleRef.value,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5',
      )
      .from(
        buttonGroupRef.value.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.3',
      )
  }

  if (buttonGroupRef.value) {
    const buttons = buttonGroupRef.value.children
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i] as HTMLElement
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          duration: 0.3,
          scale: 1.05,
          boxShadow: '0 10px 30px rgba(100, 100, 255, 0.3)',
          ease: 'power2.out',
        })
      })
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          duration: 0.3,
          scale: 1,
          boxShadow: 'none',
          ease: 'power2.out',
        })
      })
    }
  }
})
</script>

<template>
  <div class="hero-content" ref="heroContentRef">
    <h3 ref="titleRef">
      Unleash your
      <span
        style="
          background: linear-gradient(to right, purple, blue);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        "
        >creativity,</span
      ><br />
      <span
        style="
          background: linear-gradient(to right, #ff0000, #ffff00);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        "
        >software</span
      >
      shapes the
      <span
        style="
          background: linear-gradient(to right, black, white);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        "
        >future.</span
      >
    </h3>
    <p style="white-space: pre-line">
      {{ t('home.hero.description') }}
    </p>
    <div class="button-group" ref="buttonGroupRef">
      <Button icon="pi pi-file" severity="contrast" :label="t('home.hero.buttons.a')" />
      <Button icon="pi pi-users" severity="contrast" :label="t('home.hero.buttons.b')" />
      <Button icon="pi pi-github" severity="contrast" :label="t('home.hero.buttons.c')" />
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  h3 {
    font-family: 'DTJBT', sans-serif;
    font-size: 4rem;
    color: black;
    margin: 0;
    padding: 20px;
    line-height: 1.2;
    text-align: center;
    display: block;
  }

  p {
    font-family: 'OS4', sans-serif;
    font-size: 1.25rem;
    margin: 20px 0;
    padding: 0 20px;
    line-height: 1.2;
    text-align: center;
    display: block;
  }
}

.button-group {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 20px;

    h3 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .button-group {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .button-group Button {
    width: 100%;
    max-width: 200px;
  }
}
</style>
