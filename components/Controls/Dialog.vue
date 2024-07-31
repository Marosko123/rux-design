<template>
  <div class="dialog-wrapper">
    <div class="backdrop" v-if="isOpen" @click="isOpen = false"></div>

    <div class="dialog" v-if="isOpen">
      <div class="header">
        <div></div>
        <ControlsButton
          :click-callback="closeClicked"
          icon="mdiClose"
          :isCircle="true"></ControlsButton>
      </div>

      <div class="dialog-body">
        <h2>Jednoducho nám napíšte a my sa vám ozveme.</h2>

        <form id="contact-me-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Meno: <span class="red">*</span></label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              :class="{ invalid: formErrors.name }" />
            <span v-if="formErrors.name" class="error">{{
              formErrors.name
            }}</span>
          </div>

          <div class="line">
            <div class="form-group">
              <label for="email">E-mail: <span class="red">*</span></label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                :class="{ invalid: formErrors.email }" />
              <span v-if="formErrors.email" class="error">{{
                formErrors.email
              }}</span>
            </div>

            <div class="form-group">
              <label for="phone">Tel. číslo:</label>
              <input type="tel" id="phone" v-model="formData.phone" />
            </div>
          </div>

          <div class="form-group">
            <label for="website">Webstránka:</label>
            <input type="url" id="website" v-model="formData.website" />
          </div>

          <div class="form-group">
            <label for="message">Poznámka: <span class="red">*</span></label>
            <textarea
              id="message"
              v-model="formData.message"
              :class="{ invalid: formErrors.message }"
              placeholder="Je niečo čo by ste sa nás chceli spýtat?"></textarea>
            <span v-if="formErrors.message" class="error">{{
              formErrors.message
            }}</span>
          </div>

          <ControlsButton
            v-if="!showSuccess"
            class="contact-me-button"
            :click-callback="submit">
            Kontaktujte ma
          </ControlsButton>

          <div v-if="showSuccess">
            <p class="success">Vaša správa bola úspešne odoslaná!</p>
            <p class="redirect-message">O pár sekúnd budete presmerovaný.</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  website: "",
  message: "",
});

const formErrors = reactive({
  name: "",
  email: "",
  message: "",
});

let showSuccess = ref(false);

const resetData = () => {
  formData.value = {
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  };

  formErrors.name = "";
  formErrors.email = "";
  formErrors.message = "";

  showSuccess.value = false;
};

const isOpen = ref(false);

const submit = () => {
  handleSubmit();
};

const handleSubmit = () => {
  if (validateForm()) {
    console.log(formData.value);
    showSuccess.value = true;

    setTimeout(() => {
      resetData();
      isOpen.value = false;
    }, 5000);

    // TODO: Add form submission logic here
  }
};

const validateForm = () => {
  let isValid = true;
  formErrors.name = "";
  formErrors.email = "";
  formErrors.message = "";

  if (!formData.value.name) {
    formErrors.name = "Meno je povinné.";
    isValid = false;
  }
  if (!formData.value.email) {
    formErrors.email = "E-mail je povinný.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    formErrors.email = "E-mailová adresa nie je platná.";
    isValid = false;
  }
  if (!formData.value.message) {
    formErrors.message = "Poznámka je povinná.";
    isValid = false;
  }

  return isValid;
};

const closeClicked = () => {
  isOpen.value = false;
  resetData();
};

const addMessageListener = () => {
  window.addEventListener("message", event => {
    if (event.data === "open-dialog") {
      isOpen.value = true;
    }
    if (event.data === "close-dialog") {
      isOpen.value = false;
    }
  });
};

onMounted(() => {
  addMessageListener();
});
</script>

<style scoped lang="scss">
.dialog-wrapper {
  position: relative;
  z-index: 1000;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    max-width: 500px;
    max-height: 600px;

    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100vh;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        width: 40px;
        height: 40px;
      }
    }

    .dialog-body {
      margin-top: -30px;
      padding: 30px;

      h2 {
        font-size: 25px;
        font-weight: 900;
        line-height: 55px;
        text-align: center;
        max-width: 380px;
      }

      form {
        .line {
          display: flex;
          width: 100%;
          gap: 30px;

          .form-group {
            display: flex;
            flex-direction: column;
            width: 50%;
          }
        }

        .form-group {
          padding: 0 5px;
          margin-bottom: 5px;

          label {
            font-weight: 900;
            line-height: 35px;

            .red {
              color: $pink;
            }
          }

          textarea,
          input {
            width: 45%;
            height: 40px;
            background: $light-gray-2;
            width: 100%;
            border: none;
            border-radius: 5px;
            padding: 5px;
          }

          textarea {
            height: 80px;
          }

          .invalid {
            border: 2px solid red;
          }

          .error {
            color: red;
            font-size: 0.875rem;
          }
        }

        .contact-me-button {
          margin-top: 20px;
          width: 100%;
        }

        .success {
          margin: 0px;
          margin-top: 10px;
          font-weight: 900;
          background: $light-greenn;
          border-radius: 5px;
          text-align: center;
          color: $green;
        }

        .redirect-message {
          margin-top: 10px;
          text-align: center;
          font-size: 0.875rem;
          margin: 0px;
        }
      }
    }
  }
}

@media (max-width: 426px) {
  .dialog-wrapper {
    .dialog {
      width: 85%;

      .dialog-body {
        scale: 0.8;
        padding: 0;
      }
    }
  }
}
</style>
