<template>
  <div class="category-section">
    <div class="categories-container">
      <div class="card-grid">
        <div
          v-for="category in categories"
          :key="category.label"
          class="category-card"
          @click="handleCategoryClick(category)"
        >
          <div class="ripple-effect"></div>
          <i :class="category.icon"></i>
          <h3>{{ category.label }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { useRouter } from 'vue-router'

export default {
  name: 'CategorySection',
  setup() {
    const router = useRouter()
    return { router }
  },
  data() {
    return {
      categories: [
        {
          label: 'API',
          link: '/products/#api',
          icon: 'pi pi-home',
        },
        {
          label: 'Softwares',
          link: '/products/#softwares',
          icon: 'pi pi-tablet',
        },
        {
          label: 'Web',
          link: '/products/#web',
          icon: 'pi pi-shopping-bag',
        },
      ],
    }
  },
  methods: {
    handleCategoryClick(category) {
      const card = event.currentTarget
      const ripple = card.querySelector('.ripple-effect')

      gsap.set(ripple, {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        borderRadius: '50%',
        backgroundColor: 'rgba(13, 110, 253, 0.3)',
      })

      gsap.to(ripple, {
        duration: 0.6,
        width: '200%',
        height: '200%',
        ease: 'power2.out',
      })

      gsap.to(card, {
        duration: 0.6,
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        ease: 'power2.out',
      })

      gsap.to(card, {
        duration: 0.6,
        scaleX: 1.05,
        scaleY: 1.05,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
      })

      setTimeout(() => {
        this.router.push(category.link)

        gsap.to([ripple, card], {
          duration: 0.3,
          opacity: 0,
          onComplete: () => {
            gsap.set([ripple, card], {
              clearProps: 'all',
              opacity: 1,
            })
          },
        })
      }, 1000)
    },
  },
}
</script>

<style scoped>
.category-section {
  padding: 20px 0;
  background-color: #f8f9fa;
}

.categories-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: stretch;
}

.category-card {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.category-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-card i {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #0d6efd;
}

.category-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.ripple-effect {
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 新增的响应式设计 */
@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1199px) and (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) and (min-width: 481px) {
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }

  .category-card {
    padding: 20px 15px;
  }

  .category-card i {
    font-size: 1.5rem;
  }

  .category-card h3 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .category-card {
    padding: 15px 10px;
    max-width: 300px;
    margin: 0 auto;
  }

  .category-card i {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .category-card h3 {
    font-size: 0.9rem;
  }
}
</style>
