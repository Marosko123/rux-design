<template>
  <div class="goals">
    <Goal
      :number="1"
      title="Ciele auditu"
      text="Určíme si <b>spoločné</b> ciele, nastavíme očakávania a definujeme cieľovú skupinu a jej potreby." />

    <Goal
      :number="2"
      title="Zbieranie dát"
      text="Zvolíme vhodné metodiky a nástroje na sledovanie správania používateľov a zbieranie dát." />

    <Goal
      :number="3"
      title="Vyhodnotenie"
      text="Vyhodnotíme nazbierané dáta, zosumarizujeme všetky naše zistenia a navrhneme riešenia." />

    <Goal
      :number="4"
      title="Výsledky auditu"
      text="Osobná prezentácia výsledkov a navrhnutých riešení s podrobnou dokumentáciou." />
  </div>
</template>

<style scoped lang="scss">
.goals {
  width: fit-content;
  margin: auto;
}
</style>
