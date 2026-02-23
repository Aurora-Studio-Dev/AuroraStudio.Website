<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeroSection from '@/components/products-view/HeroSection.vue'
import CategorySection from '@/components/products-view/CategorySection.vue'
import ProductsSection from '@/components/products-view/ProductsSection.vue'

interface Product {
  id: number
  image: string
  name: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
}

const products = ref<Product[]>([
  {
    id: 1,
    image: '/images/product1.jpg',
    name: 'Product One',
    description: 'This is the first product.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    buttonText: 'Learn More',
    buttonLink: '/product/1',
  },
  {
    id: 2,
    image: '/images/product2.jpg',
    name: 'Product Two',
    description: 'This is the second product.',
    features: ['Feature A', 'Feature B', 'Feature C'],
    buttonText: 'Learn More',
    buttonLink: '/product/2',
  },
])

onMounted(async () => {
  try {
    const response = await fetch('/api/products')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
})
</script>

<template>
  <div class="products-view">
    <HeroSection />
    <CategorySection />
    <ProductsSection :products="products" />
  </div>
</template>

<style scoped></style>
