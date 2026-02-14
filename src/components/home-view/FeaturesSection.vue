<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Add hover animations for feature items
  const featureItems = document.querySelectorAll('.feature-item')
  featureItems.forEach((item) => {
    const featureItem = item as HTMLElement

    featureItem.addEventListener('mouseenter', () => {
      gsap.to(featureItem, {
        duration: 0.3,
        x: 5,
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
        ease: 'power2.out',
      })
    })

    featureItem.addEventListener('mouseleave', () => {
      gsap.to(featureItem, {
        duration: 0.3,
        x: 0,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        ease: 'power2.out',
      })
    })
  })
})
</script>

<template>
  <div class="features-section-container">
    <div class="features-section-content">
      <div class="features-section-header">
        <span class="features-section-label">Key Features</span>
        <h3 class="features-section-title">Why Choose Our Products</h3>
        <p class="features-section-description">
          Built with developer experience and performance in mind
        </p>
      </div>

      <div class="features-list">
        <div class="feature-item">
          <span class="feature-label">Performance</span>
          <h3 class="feature-title">High Speed</h3>
          <p class="feature-description">
            Optimized codebase for fast loading times and smooth interactions
          </p>
        </div>

        <div class="feature-item">
          <span class="feature-label">Design</span>
          <h3 class="feature-title">Responsive</h3>
          <p class="feature-description">
            Perfectly adapts to any screen size for seamless user experience
          </p>
        </div>

        <div class="feature-item">
          <span class="feature-label">Interface</span>
          <h3 class="feature-title">Modern UI</h3>
          <p class="feature-description">
            Clean, minimalist design with subtle animations and transitions
          </p>
        </div>

        <div class="feature-item">
          <span class="feature-label">Compatibility</span>
          <h3 class="feature-title">Cross-Platform</h3>
          <p class="feature-description">Works seamlessly across all modern browsers and devices</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-section-container {
  background-color: rgb(252, 252, 252);
  padding: 64px 0;
}

.features-section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.features-section-header {
  text-align: center;
  margin-bottom: 48px;
}

.features-section-label {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.features-section-title {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  font-family: 'DTJBT', sans-serif;
}

.features-section-description {
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  color: #6b7280;
  line-height: 1.5;
}

.features-list {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.feature-item {
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  padding: 24px;
  background: linear-gradient(to bottom right, white, #f9fafb);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  margin: 0 12px;
}

.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.feature-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
  font-family: 'DTJBT', sans-serif;
}

.feature-description {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .feature-item {
    flex: 1 1 calc(50% - 24px);
  }
}

@media (max-width: 768px) {
  .features-section-container {
    padding: 48px 0;
  }

  .features-section-content {
    padding: 0 16px;
  }

  .features-section-title {
    font-size: 24px;
  }

  .features-section-description {
    font-size: 16px;
  }

  .feature-item {
    flex: 1 1 100%;
    margin: 0;
  }

  .feature-title {
    font-size: 18px;
  }

  .feature-description {
    font-size: 14px;
  }
}
</style>
