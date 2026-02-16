<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
  const productItems = document.querySelectorAll('.product-item')
  productItems.forEach((item) => {
    const productItem = item as HTMLElement
    const productImage = productItem.querySelector('.product-image') as HTMLElement

    productItem.addEventListener('mouseenter', () => {
      gsap.to(productItem, {
        duration: 0.3,
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        ease: 'power2.out',
      })

      if (productImage) {
        gsap.to(productImage, {
          duration: 0.3,
          scale: 1.05,
          ease: 'power2.out',
        })
      }
    })

    productItem.addEventListener('mouseleave', () => {
      gsap.to(productItem, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        ease: 'power2.out',
      })

      if (productImage) {
        gsap.to(productImage, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out',
        })
      }
    })
  })

  const productButtons = document.querySelectorAll('.product-button')
  productButtons.forEach((button) => {
    const btn = button as HTMLElement
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)',
        ease: 'power2.out',
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 2px 10px rgba(79, 70, 229, 0.2)',
        ease: 'power2.out',
      })
    })
  })
})
</script>

<template>
  <div class="products-section">
    <div class="products-section-container">
      <div class="products-section-header">
        <span class="products-section-label">{{ t('home.projects.title.a') }}</span>
        <h3 class="products-section-title">{{ t('home.projects.title.b') }}</h3>
        <p class="products-section-description">{{ t('home.projects.description') }}</p>
      </div>

      <div class="products-list">
        <div class="product-item">
          <div class="product-image">
            <img src="@/assets/sections/products/API.png" />
          </div>
          <div class="product-content">
            <h4 class="product-title">
              <span>{{ t('home.projects.products.a.name') }}</span>
            </h4>
            <p class="product-description">
              {{ t('home.projects.products.a.description') }}
            </p>
            <div class="product-buttons">
              <Button
                severity="contrast"
                class="product-button"
                icon="pi pi-external-link"
                :label="t('home.projects.products.a.buttons.view')"
              />
              <Button
                severity="contrast"
                class="product-button"
                icon="pi pi-github"
                :label="t('home.projects.products.a.buttons.github')"
              />
            </div>
          </div>
        </div>

        <div class="product-item">
          <div class="product-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=database%20management%20system%20interface%20with%20tables%20and%20charts&image_size=square"
            />
          </div>
          <div class="product-content">
            <h4 class="product-title">
              <span>{{ t('home.projects.products.b.name') }}</span>
            </h4>
            <p class="product-description">
              {{ t('home.projects.products.b.description') }}
            </p>
            <div class="product-buttons">
              <Button
                severity="contrast"
                class="product-button"
                icon="pi pi-external-link"
                :label="t('home.projects.products.b.buttons.view')"
              />
              <Button
                severity="contrast"
                class="product-button"
                icon="pi pi-github"
                :label="t('home.projects.products.b.buttons.github')"
              />
            </div>
          </div>
        </div>

        <div class="product-item">
          <div class="product-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20infrastructure%20dashboard%20with%20servers%20and%20analytics&image_size=square"
            />
          </div>
          <div class="product-content">
            <h4 class="product-title">
              <span>{{ t('home.projects.products.c.name') }}</span>
            </h4>
            <p class="product-description">
              {{ t('home.projects.products.c.description') }}
            </p>
            <div class="product-buttons">
              <Button
                severity="contrast"
                class="product-button"
                icon="pi pi-external-link"
                :label="t('home.projects.products.c.buttons.view')"
              />
              <Button
                severity="contrast"
                class="product-button"
                icon="pi pi-github"
                :label="t('home.projects.products.c.buttons.github')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-section-container {
  background: white;
  padding: 64px 0;
}

.products-section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.products-section-header {
  text-align: center;
  margin-bottom: 48px;
}

.products-section-label {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.products-section-title {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  font-family: 'DTJBT', sans-serif;
}

.products-section-description {
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  color: #6b7280;
  line-height: 1.5;
}

.products-list {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 24px;
}

.product-item {
  flex: 1;
  min-width: 320px;
  max-width: 380px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  font-family: 'DTJBT', sans-serif;
}

.product-title span {
  background: linear-gradient(to right, #4f46e5, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-description {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.product-buttons {
  display: flex;
  gap: 12px;
}

.product-button {
  flex: 1;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .product-item {
    flex: 1 1 calc(33.333% - 24px);
  }
}

@media (max-width: 768px) {
  .products-section-container {
    padding: 48px 0;
  }

  .products-section-content {
    padding: 0 16px;
  }

  .products-section-title {
    font-size: 24px;
  }

  .products-section-description {
    font-size: 16px;
  }

  .product-item {
    flex: 1 1 100%;
    margin: 0;
    min-width: 280px;
  }

  .product-content {
    padding: 20px;
  }

  .product-buttons {
    flex-direction: column;
  }

  .product-button {
    width: 100%;
  }
}
</style>
