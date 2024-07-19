<template>
  <div class="main big-padding">
    <div class="grid-wrapper">
      <h2 class="grid-item box-1 animation-hidden">
        Rýchle <u>výsledky</u> pomocou UX auditu.
      </h2>

      <p class="grid-item box-2 first-paragraph animation-hidden">
        UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú
        váš produkt,
        <b> zvýšite ich spokojnosť a hlavne vaše zisky. </b>
      </p>

      <p class="grid-item box-3 second-paragraph animation-hidden">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <b>pomocou UX auditu.</b>
      </p>

      <div class="grid-item box-4 partners animation-hidden">
        <img src="/public/google_partner.png" alt="google partner" />
        <img src="/public/member_of_adma.png" alt="member of adma" />
      </div>

      <div class="grid-item box-5 checkmarks-wrapper">
        <ControlsText
          class="checkmarks animation-hidden"
          value="Odhalíme nedostatky na vašej stránke"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="checkmarks animation-hidden"
          value="Zvýšime konverzný pomer vašich stránok"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="checkmarks animation-hidden"
          value="Zvýšime výkon marketingových kampaní"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="checkmarks animation-hidden"
          value="Znížime vaše náklady na vývoj"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="checkmarks animation-hidden"
          value="Zvýšime návštevnosť vašich stránok"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
      </div>

      <div class="grid-item box-6 button-wrapper animation-hidden">
        <ControlsButton :click-callback="showApplyDialog">
          Mám záujem o UX audit
        </ControlsButton>
      </div>

      <ReviewsList
        class="grid-item reviewss box-7 animation-hidden"
        :reviews="reviews" />

      <h2 class="grid-item box-8 middle-title animation-hidden">
        Rýchla a jednoduchá cesta k <u>výsledkom.</u>
      </h2>

      <GoalsGoalss class="grid-item box-9 animation-hidden" />

      <h2 class="grid-item box-10 animation-hidden">
        Zameriame sa na to <u>najdôležitejšie.</u>
      </h2>

      <p class="grid-item box-11 first-paragraph animation-hidden">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <br />
        <b> pomocou UX auditu. </b>
      </p>

      <div class="grid-item box-12 button-wrapper animation-hidden">
        <ControlsButton :click-callback="showApplyDialog">
          Mám záujem o UX audit
        </ControlsButton>
      </div>

      <div class="grid-item box-13 checkmarks-wrapper">
        <ControlsText
          class="animation-hidden checkmarks"
          value="Informačnú architektúru a štruktúru kategórií"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="animation-hidden checkmarks"
          value="Správanie návštevníkov na kľúčových stránkach"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="animation-hidden checkmarks"
          value="Rýchlosť a dostupnosť stránok, SEO nastavenia"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="animation-hidden checkmarks"
          value="Váš biznis a vašich zákazníkov"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="animation-hidden checkmarks"
          value="Ciele, ktoré chcete dosiahnuť"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
        <ControlsText
          class="animation-hidden checkmarks"
          value="Webovú analytiku"
          icon="mdiCheckCircle"
          iconColor="#6bbc13" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserReview from "~/types/user-review";

const reviews = [
  new UserReview(
    "Jozef Korman",
    "Konateľ",
    "SvetNápojov.sk",
    "logo_svetnapojov.png",
    "Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu. Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat"
  ),
  new UserReview(
    "Richard Wohlstein",
    "Retail manager",
    "AlainDelon.sk",
    "logo_alaindelon.png",
    "S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou. Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat Zmazat"
  ),
];

const showApplyDialog = () => {
  window.postMessage("open-dialog");
};

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-visible");
      } else {
        entry.target.classList.remove("animation-visible");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".animation-hidden");
  hiddenElements.forEach(element => {
    observer.observe(element);
  });
});
</script>

<style scoped lang="scss">
.main {
  margin-top: 30px;

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(39, 50px);
    grid-gap: 20px;
    max-width: 65%;
    margin: auto;

    .box-1 {
      // place to the top left corner
      grid-column: 1 / 2;
      grid-row: 1 / 4;
    }

    .box-2 {
      grid-column: 1 / 2;
      grid-row: 4 / 7;
    }

    .box-3 {
      grid-column: 1 / 2;
      grid-row: 7 / 10;
      margin-top: 10px;
    }

    .box-4 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .box-5 {
      grid-column: 2 / 3;
      grid-row: 3 / 7;
    }

    .box-6 {
      grid-column: 2 / 3;
      grid-row: 7 / 8;
    }

    .box-7 {
      grid-column: 1 / 3;
      grid-row: 9 / 18;
    }

    .box-8 {
      grid-column: 1 / 3;
      grid-row: 17 / 18;
      margin: auto;
      text-align: center;
      max-width: 500px;
    }

    .box-9 {
      grid-column: 1 / 3;
      grid-row: 21 / 28;
    }

    .box-10 {
      grid-column: 1 / 2;
      grid-row: 31 / 33;
      width: 460px;
    }

    .box-11 {
      grid-column: 1 / 2;
      grid-row: 34 / 36;
    }

    .box-12 {
      grid-column: 1 / 2;
      grid-row: 36 / 38;
    }

    .box-13 {
      grid-column: 2 / 3;
      grid-row: 33 / 34;
    }

    .partners {
      display: flex;
      gap: 20px;
      height: 186px;
      user-select: none;

      img {
        width: 185px;
        height: 86px;
      }
    }

    .reviewss {
      &.animation-hidden {
        transform: translateX(-200px);
        transition: all 1s;
      }

      &.animation-visible {
        transform: translateX(0);
      }
    }

    .checkmarks-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 120px;
    }

    .button-wrapper {
      display: flex;
      justify-content: left;
      margin-top: 30px;

      .button {
        width: 380px;
        height: 72px;
        font-size: 20px;
      }
    }

    .middle-title {
      width: 100%;
      margin-top: 50px;
      margin-bottom: 100px;
    }

    .animation-hidden {
      opacity: 0;
      transition: all 1s;
    }

    .animation-visible {
      opacity: 1;
    }

    .box-5,
    .box-13 {
      .checkmarks {
        &.animation-hidden {
          transform: translateX(100px);
        }

        &.animation-visible {
          transform: translateX(0);
        }
      }

      .checkmarks:nth-child(1) {
        transition-delay: 200ms;
      }

      .checkmarks:nth-child(2) {
        transition-delay: 400ms;
      }

      .checkmarks:nth-child(3) {
        transition-delay: 600ms;
      }

      .checkmarks:nth-child(4) {
        transition-delay: 800ms;
      }

      .checkmarks:nth-child(5) {
        transition-delay: 1000ms;
      }

      .checkmarks:nth-child(6) {
        transition-delay: 1200ms;
      }
    }

    @media (prefers-reduced-motion) {
      .animation-hidden {
        transition: none;
      }
    }
  }
}

@media (max-width: 425px) {
  .main {
    .grid-wrapper {
      grid-template-columns: 100%;
      grid-template-rows: repeat(145, 10px);
      max-width: 100%;
      height: fit-content;

      .box-4 {
        grid-column: 1;
        grid-row: 1;
      }

      .box-1 {
        grid-column: 1;
        grid-row: 4;
        text-align: left;
      }

      .box-2 {
        grid-column: 1;
        grid-row: 10;
        font-size: 20px;
        font-weight: 400;
        line-height: 40px;
      }

      .box-5 {
        grid-column: 1;
        grid-row: 20;
      }

      .box-3 {
        grid-column: 1;
        grid-row: 33;
        font-size: 22px;
      }

      .box-6 {
        grid-column: 1;
        grid-row: 39;
      }

      .box-7 {
        grid-column: 1;
        grid-row: 42;
      }

      .box-8 {
        grid-column: 1;
        grid-row: 80;
        text-align: left;
      }

      .box-9 {
        grid-column: 1;
        grid-row: 89;
      }

      .box-10 {
        grid-column: 1;
        grid-row: 115;
        width: 100%;
      }

      .box-13 {
        grid-column: 1;
        grid-row: 120;
      }

      .box-11 {
        grid-column: 1;
        grid-row: 135;
        font-size: 22px;
      }

      .box-12 {
        grid-column: 1;
        grid-row: 141;
      }

      .partners {
        height: 86px;

        img {
          width: 120px;
          height: 56px;
        }
      }

      .checkmarks-wrapper {
        margin-bottom: 40px;
      }

      .button-wrapper {
        .button {
          width: 100%;
          height: 60px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
