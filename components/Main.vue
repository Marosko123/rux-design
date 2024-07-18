<template>
  <div class="main big-padding">
    <div class="columns-wrapper">
      <div class="column first-column">
        <h2>Rýchle výsledky pomocou UX auditu.</h2>

        <p class="first-paragraph">
          UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci
          používajú váš produkt,
          <b> zvýšite ich spokojnosť a hlavne vaše zisky. </b>
        </p>

        <p class="second-paragraph">
          Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
          <b>pomocou UX auditu.</b>
        </p>
      </div>

      <div class="column second-column">
        <div class="partners">
          <img src="/google_partner.png" alt="google partner" />
          <img src="/member_of_adma.png" alt="member of adma" />
        </div>

        <div class="checkmarks-wrapper">
          <Text
            value="Odhalíme nedostatky na vašej stránke"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Zvýšime konverzný pomer vašich stránok"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Zvýšime výkon marketingových kampaní"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Znížime vaše náklady na vývoj"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Zvýšime návštevnosť vašich stránok"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
        </div>

        <div class="button-wrapper">
          <Button>Mám záujem o UX audit</Button>
        </div>
      </div>
    </div>

    <ReviewsList :reviews="reviews" />

    <h2 class="middle-title">Rýchla a jednoduchá cesta k výsledkom.</h2>

    <Goals />

    <div class="bottom-columns columns-wrapper">
      <div class="column first-column">
        <h2>Zameriame sa na to najdôležitejšie.</h2>

        <p class="first-paragraph">
          Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
          <br />
          <b> pomocou UX auditu. </b>
        </p>

        <div class="button-wrapper">
          <Button>Mám záujem o UX audit</Button>
        </div>
      </div>

      <div class="column second-column">
        <div class="partners"></div>

        <div class="checkmarks-wrapper">
          <Text
            value="Informačnú architektúru a štruktúru kategórií"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Správanie návštevníkov na kľúčových stránkach"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Rýchlosť a dostupnosť stránok, SEO nastavenia"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Váš biznis a vašich zákazníkov"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Ciele, ktoré chcete dosiahnuť"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
          <Text
            value="Webovú analytiku"
            icon="mdiCheckCircle"
            iconColor="#6bbc13" />
        </div>
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
</script>

<style scoped lang="scss">
.main {
  .columns-wrapper {
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;

    .column {
      width: 500px;
      text-align: left;
    }

    .first-column {
      h2 {
        width: 431px;
        margin-bottom: 50px;
      }

      .first-paragraph {
        width: 439px;
        margin-bottom: 100px;
      }

      .second-paragraph {
        width: 496px;
      }
    }

    .second-column {
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

      .checkmarks-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 120px;
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 40px;

        .button {
          width: 380px;
          height: 72px;
          font-size: 20px;
        }
      }
    }
  }

  .middle-title {
    width: 600px;
    text-align: center;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  .bottom-columns {
    margin-top: 100px;

    .button-wrapper {
      display: flex;
      margin-top: -60px;

      .button {
        width: 380px;
        height: 72px;
        font-size: 20px;
      }
    }

    .checkmarks-wrapper {
      margin-top: -40px;
    }
  }
}
</style>
