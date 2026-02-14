<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Add hover animations for product items
  const productItems = document.querySelectorAll('.product-item')
  productItems.forEach((item) => {
    const productItem = item as HTMLElement
    const productImage = productItem.querySelector('.product-image') as HTMLElement

    productItem.addEventListener('mouseenter', () => {
      gsap.to(productItem, {
        duration: 0.3,
        y: -5,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
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
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
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

  // Add hover animations for product buttons (same as hero buttons)
  const productButtons = document.querySelectorAll('.product-buttons Button')
  productButtons.forEach((button) => {
    const btn = button as HTMLElement
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(100, 100, 255, 0.3)',
        ease: 'power2.out',
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
        boxShadow: 'none',
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
        <span class="products-section-label">Our Products</span>
        <h3 class="products-section-title">Featured Projects</h3>
        <p class="products-section-description">Explore our latest projects and solutions</p>
      </div>

      <div class="products-list">
        <!-- Product 1 -->
        <div class="product-item">
          <div class="product-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20frontend%20framework%20dashboard%20interface%20with%20code%20editor%20and%20preview%20panel&image_size=square"
              alt="Aurora Framework"
            />
          </div>
          <h4 class="product-title">
            <span
              style="
                background: linear-gradient(to right, #4f46e5, #8b5cf6);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >Aurora Framework</span
            >
          </h4>
          <p class="product-description">
            Modern frontend framework for building responsive web applications
          </p>
          <div class="product-buttons">
            <Button icon="pi pi-external-link" severity="contrast" label="View Project" />
            <Button icon="pi pi-github" severity="contrast" label="GitHub" />
          </div>
        </div>

        <!-- Product 2 -->
        <div class="product-item">
          <div class="product-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=database%20management%20system%20interface%20with%20tables%20and%20charts&image_size=square"
              alt="Aurora DB"
            />
          </div>
          <h4 class="product-title">
            <span
              style="
                background: linear-gradient(to right, #10b981, #3b82f6);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >Aurora DB</span
            >
          </h4>
          <p class="product-description">Lightweight database solution for modern applications</p>
          <div class="product-buttons">
            <Button icon="pi pi-external-link" severity="contrast" label="View Project" />
            <Button icon="pi pi-github" severity="contrast" label="GitHub" />
          </div>
        </div>

        <!-- Product 3 -->
        <div class="product-item">
          <div class="product-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20infrastructure%20dashboard%20with%20servers%20and%20analytics&image_size=square"
              alt="Aurora Cloud"
            />
          </div>
          <h4 class="product-title">
            <span
              style="
                background: linear-gradient(to right, #6366f1, #ec4899);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >Aurora Cloud</span
            >
          </h4>
          <p class="product-description">
            Cloud infrastructure for scalable application deployment
          </p>
          <div class="product-buttons">
            <Button icon="pi pi-external-link" severity="contrast" label="View Project" />
            <Button icon="pi pi-github" severity="contrast" label="GitHub" />
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
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 24px;
}

.product-item {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  padding: 0;
  background: linear-gradient(to bottom right, white, #f9fafb);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  overflow: hidden;
}

.product-item > *:not(.product-image) {
  padding: 0 32px;
}

.product-buttons {
  padding-bottom: 32px !important;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 24px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-item:hover .product-image img {
  transform: scale(1.05);
}

.product-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
  font-family: 'DTJBT', sans-serif;
}

.product-description {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 24px;
}

.product-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
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
  }

  .product-buttons {
    flex-direction: column;
    align-items: center;
  }

  .product-buttons Button {
    width: 100%;
    max-width: 200px;
  }
}
</style>
