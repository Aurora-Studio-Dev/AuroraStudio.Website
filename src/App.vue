<script setup>
import NavBar from '@/components/PageNavBar.vue'
import Footer from '@/components/PageFooter.vue'
</script>
<template>
  <div class="app-container">
    <NavBar class="fixed-navbar" />
    <div class="content-container">
      <el-container style="min-height: 100vh">
        <el-main class="main-content">
          <div class="router-view-container">
            <RouterView />
          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content-container {
  flex: 1;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0;
  overflow-y: auto;
  background-color: #f9f9f9;
}

.custom-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #f5f7fa;
  border-top: 1px solid #e4e7ed;
  padding: 12px 0;
  text-align: center;
}
</style>
