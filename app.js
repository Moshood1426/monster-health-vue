const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentAttack: 0,
      specialAttack: 0,
    };
  },
  watch: {
    currentAttack() {
      if (this.currentAttack === 3) {
        this.specialAttack = this.specialAttack + 1;
      }
    },
  },
  computed: {
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      if (this.currentAttack < 3) {
        this.currentAttack = this.currentAttack + 1;
      } else {
        this.currentAttack = 0;
      }
      const randomNum = getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - randomNum;

      this.attackPlayer();
    },
    attackPlayer() {
      const randomNum = getRandomValue(7, 12);
      this.playerHealth = this.playerHealth - randomNum;
    },
    specialPlayerAttack() {
      this.currentAttack = 0;

      const randomNum = getRandomValue(15, 20);
      this.monsterHealth = this.monsterHealth - randomNum;
      this.attackPlayer();
      if (this.specialAttack > 0) {
        this.specialAttack = this.specialAttack - 1;
      }
    },
    healPlayer() {
      const randomNum = getRandomValue(5, 12);
    },
  },
});

app.mount("#game");
