<template>
  <div class="main big-padding">
    <div class="grid-wrapper">
      <h2 class="first-title animation-hidden">
        Rýchle <u>výsledky</u> pomocou UX auditu.
      </h2>

      <div class="partners animation-hidden">
        <img src="/public/google_partner.png" alt="google partner" />
        <img src="/public/member_of_adma.png" alt="member of adma" />
      </div>

      <p class="first-paragraph animation-hidden">
        UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú
        váš produkt,
        <b> zvýšite ich spokojnosť a hlavne vaše zisky. </b>
      </p>

      <div class="checkmarks-wrapper checkmarks-wrapper-1">
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

      <p class="second-paragraph animation-hidden">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <b>pomocou UX auditu.</b>
      </p>

      <div class="button-1 button-wrapper animation-hidden">
        <ControlsButton :click-callback="showApplyDialog">
          Mám záujem o UX audit
        </ControlsButton>
      </div>

      <ReviewsList class="reviewss animation-hidden" :reviews="reviews" />

      <h2 class="second-title animation-hidden">
        Rýchla a jednoduchá cesta k <u>výsledkom.</u>
      </h2>

      <GoalsGoalss class="goals-wrapper animation-hidden" />

      <h2 class="third-title animation-hidden">
        Zameriame sa na to <u>najdôležitejšie.</u>
      </h2>

      <p class="third-paragraph animation-hidden">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <br />
        <b> pomocou UX auditu. </b>
      </p>

      <div class="checkmarks-wrapper checkmarks-wrapper-2">
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

      <div class="button-2 button-wrapper animation-hidden">
        <ControlsButton :click-callback="showApplyDialog">
          Mám záujem o UX audit
        </ControlsButton>
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
    "Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu. Dalsi text ...."
  ),
  new UserReview(
    "Richard Wohlstein",
    "Retail manager",
    "AlainDelon.sk",
    "logo_alaindelon.png",
    "S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou. Dalsi text ...."
  ),
];

const showApplyDialog = () => {
  window.postMessage("open-dialog");
};

const startAnimation = () => {
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
};

onMounted(() => {
  startAnimation();
});
</script>

<style scoped lang="scss">
.main {
  margin-top: 30px;
  margin-bottom: 150px;

  .grid-wrapper {
    display: grid;
    grid-gap: 0 20px;
    max-width: 65%;
    margin: auto;
    grid-template-columns: 1fr 1fr;

    // all grid columns for these elements
    .second-title,
    .third-title,
    .goals-wrapper,
    .reviewss {
      grid-column: 1 / -1;
    }

    .first-title {
      margin: 0;
    }

    .second-title {
      text-align: center;
      margin: 100px auto;
      max-width: 600px;
    }

    .third-title {
      max-width: 600px;
      margin-top: 50px;
    }

    .first-paragraph {
      margin-top: auto;
    }

    .second-paragraph {
      margin: 100px 0;
    }

    .third-paragraph {
      margin: 25px 0;
    }

    .partners {
      display: flex;
      gap: 20px;
      user-select: none;

      img {
        width: 185px;
        height: 86px;
      }
    }

    .reviewss {
      &.animation-hidden {
        position: relative;
        left: -200px;
        transition: all 1s;
      }

      &.animation-visible {
        left: 0;
      }
    }

    .button-wrapper {
      align-content: center;

      .button {
        width: 380px;
        height: 72px;
        font-size: 20px;
      }
    }

    .checkmarks-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .checkmarks-wrapper-1 {
      margin-top: -20px;
    }

    .checkmarks-wrapper-2 {
      grid-column: 2 / 3;
      grid-row: 8 / 10;
    }

    .checkmarks {
      &.animation-hidden {
        transition: all 1s;
        position: relative;
        left: 200px;
      }

      &.animation-visible {
        left: 0;
      }
    }

    .animation-hidden {
      opacity: 0;
      transition: all 1s;
    }

    .animation-visible {
      opacity: 1;
    }

    @media (prefers-reduced-motion) {
      .animation-hidden {
        transition: none;
      }
    }
  }
}

@media (max-width: 426px) {
  .main {
    margin-bottom: 50px;

    .grid-wrapper {
      grid-template-columns: 1fr;
      max-width: 90%;
      margin: auto;
      gap: 40px;

      // we need to override the grid-column property
      // for the elements that are in the second column
      & > * {
        grid-column: 1 / -1 !important;
      }

      .first-paragraph,
      .second-paragraph,
      .third-paragraph {
        font-size: 22px;
      }

      .second-paragraph {
        margin: 0;
      }

      .second-title,
      .third-title {
        margin: 0px;
        margin-bottom: 40px;
      }

      .checkmarks-wrapper-2 {
        grid-row: 11 / 13;
      }

      .partners {
        height: 86px;
        grid-row: 1;

        img {
          width: 120px;
          height: 56px;
        }
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
