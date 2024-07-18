<template>
  <div class="goals">
    <GoalsGoal
      :number="1"
      title="Ciele auditu"
      text="Určíme si <b>spoločné ciele,</b> nastavíme očakávania a definujeme <b>cieľovú skupinu a jej potreby.</b>" />

    <GoalsGoal
      :number="2"
      title="Zbieranie dát"
      text="Zvolíme vhodné metodiky a nástroje na <b>sledovanie správania používateľov a zbieranie dát.</b>" />

    <GoalsGoal
      :number="3"
      title="Vyhodnotenie"
      text="<b>Vyhodnotíme nazbierané dáta</b>, zosumarizujeme všetky naše zistenia a <b>navrhneme riešenia.</b>" />

    <GoalsGoal
      :number="4"
      title="Výsledky auditu"
      text="<b>Osobná prezentácia výsledkov a navrhnutých riešení</b> s podrobnou dokumentáciou." />
  </div>
</template>

<style scoped lang="scss">
.goals {
  width: fit-content;
  margin: auto;
}
</style>
