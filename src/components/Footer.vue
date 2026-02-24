<template>
  <footer class="designer-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section brand-info">
          <img class="brand-logo" src="@/assets/logo.svg" alt="Aurora Studio" height="55px" />
          <p class="brand-tagline">{{ t('footer.brand.tagline') }}</p>
        </div>

        <div class="footer-section services">
          <h4>{{ t('footer.services.title') }}</h4>
          <ul>
            <li>
              <a href="https://docs.aurorastudio.top/">{{ t('footer.services.docs') }}</a>
            </li>
            <li>
              <a href="#">{{ t('footer.services.simpleSSH') }}</a>
            </li>
            <li>
              <a href="#">{{ t('footer.services.starsAICopilot') }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-section contact">
          <h4>{{ t('footer.contact.title') }}</h4>
          <ul>
            <li>
              <b>{{ t('footer.contact.emailLabel') }}</b> {{ t('footer.contact.email') }}
            </li>
          </ul>
          <Button
            :label="t('footer.contact.button')"
            icon="pi pi-users"
            class="p-button-outlined"
          />
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <p>
            aurorastudio.top:
            <a class="link" href="https://beian.miit.gov.cn/">粤ICP备2025371287号-1</a><br />
            Copyright © 2023 - {{ new Date().getFullYear() }} CODEPEX ( The original AURORA ). All
            rights reserved.
          </p>
        </div>
        <div class="back-to-top">
          <button @click="scrollToTop" class="top-button">
            <span class="arrow">↑</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'DesignerFooter',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.designer-footer {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #333;
  padding: 5rem 2rem 3rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.03);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-section h3,
.footer-section h4 {
  font-weight: 400;
  margin-bottom: 1.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 1rem;
  position: relative;
}

.footer-section h3::after,
.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #666, transparent);
}

.brand-logo {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 0.8rem;
  background: linear-gradient(90deg, #333, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-style: italic;
  color: #777;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  position: relative;
  padding-left: 20px;
}

.brand-tagline::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -5px;
  font-size: 2rem;
  color: #ddd;
  font-style: normal;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 5px 0;
}

.footer-section li:hover {
  transform: translateX(5px);
}

.footer-section a {
  color: #555;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 2px 0;
}

.footer-section a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #666, #999);
  transition: width 0.4s ease;
}

.footer-section a:hover {
  color: #333;
}

.footer-section a:hover::after {
  width: 100%;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
}

.footer-bottom::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd, transparent);
}

.copyright p {
  font-size: 0.9rem;
  color: #777;
  line-height: 1.6;
}

.top-button {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border: 2px solid #ddd;
  color: #666;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.arrow {
  transition: all 0.3s ease;
}

.top-button:hover {
  background: linear-gradient(135deg, #666, #333);
  color: white;
  transform: translateY(-5px) rotate(360deg);
  border-color: #333;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.top-button:hover .arrow {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
  }

  .brand-logo {
    font-size: 1.8rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
