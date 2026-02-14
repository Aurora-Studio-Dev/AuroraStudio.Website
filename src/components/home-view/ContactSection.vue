<script setup>
import Editor from 'primevue/editor'
</script>

<template>
  <div class="contact-section">
    <div class="contact-section-container">
      <div class="contact-section-header">
        <span class="contact-section-label">Keep in touch with us</span>
        <h3 class="contact-section-title">
          Don't fall behind, hurry up and
          <span
            style="
              background: linear-gradient(to right, white, black);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            >catch up.</span
          >
        </h3>
        <p class="contact-section-description">
          Tell us your views about our products and what things you want to see in the future.
        </p>
      </div>

      <div class="content-wrapper">
        <div class="email-form-container">
          <div class="form-wrapper">
            <Message severity="warn" icon="pi pi-info-circle">
              Due to the receipt form being abused by bots, we have now shut it down. You can still
              contact us through the other methods below!</Message
            >
            <FloatLabel class="item">
              <InputText style="width: 100%" id="username" />
              <label for="username">Your Name</label>
            </FloatLabel>
            <FloatLabel class="item">
              <InputText style="width: 100%" id="email" />
              <label for="email">Your Email</label>
            </FloatLabel>
            <FloatLabel class="item">
              <InputText style="width: 100%" id="theme" />
              <label for="theme">Theme</label>
            </FloatLabel>
            <Editor class="item" editorStyle="height: 150px; width: 100%" />
            <Button label="Send" icon="pi pi-send" class="p-button-outlined item" disabled="true" />
          </div>
        </div>

        <div class="more-contact-options">
          <Button label="Learn more ways" icon="pi pi-users" class="p-button-outlined" />
        </div>
      </div>
      <div class="background-copyright">
        <div class="copyright-content">
          <p class="copyright-text">
            We have communicated with the original author and obtained<br />the '<a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              >CC BY-NC-SA 4.0</a
            >' authorization from the original author of the image.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section-container {
  padding: 64px 0;
  background-image: url('@/assets/sections/home/background-contact.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
}

.content-wrapper {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-section-header {
  text-align: center;
  margin-bottom: 48px;
  width: 100%;
}

.contact-section-label {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.contact-section-title {
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  font-family: 'DTJBT', sans-serif;
}

.contact-section-description {
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  color: #dedede;
  line-height: 1.5;
}

.email-form-container {
  width: 100%;
  max-width: 750px;
  margin-bottom: 48px;
}

.form-wrapper {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-height: 100px;
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
}

.form-wrapper .item {
  margin-top: 25px;
  width: 100%;
}

.form-wrapper .item:first-child {
  margin-top: 0;
}

.more-contact-options {
  margin-top: -10px;
}

.background-copyright {
  margin: 25px;
  text-align: left;
}

.copyright-content {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 20px;
}

.copyright-text {
  font-size: 12px;
  color: #9ca3af;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .contact-section-container {
    padding: 48px 0;
    min-height: auto;
  }

  .content-wrapper {
    padding: 0 16px;
  }

  .contact-section-title {
    font-size: 24px;
  }

  .contact-section-description {
    font-size: 16px;
  }

  .form-wrapper {
    padding: 24px;
  }

  .background-copyright {
    position: relative;
    bottom: auto;
    right: auto;
    left: auto;
    text-align: center;
    margin-top: 32px;
  }

  .copyright-content {
    display: block;
    text-align: center;
  }
}

a {
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
