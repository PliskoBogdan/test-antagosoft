<style scoped>
#app {
}
.title {
  margin: 40px;
  font-size: 30px;
}
.popup {
  position: absolute;
  border: 1px solid #333;
  padding: 13px;
  left: 8px;
}

.isSelected {
  border: 3px solid red;
}
.rendering-menu input {
  text-align: center;
  border: 0;
  width: 75px;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;
  font-size: 20px;
}

.rendering-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.collection {
  margin-top: 20px;
}

.vue-virtual-collection {
  margin: 0 auto;
}

.card {
  background: #aaa;
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.card.color0 {
  background: rgb(108, 85, 84);
}
.card.color1 {
  background: rgb(255, 235, 59);
}
.card.color2 {
  background: rgb(255, 152, 0);
}
.card.color3 {
  background: rgb(33, 150, 243);
}
.card.color4 {
  background: rgb(55, 64, 70);
}
.card.color5 {
  background: rgb(103, 58, 183);
}
.card.color6 {
  background: rgb(63, 81, 181);
}
.card.color7 {
  background: rgb(76, 175, 80);
}
</style>

<template>
  <div id="app">
    <div v-if="selectedItem.id" :key="selectedItem.id" class="popup">
      <div>Element: {{ selectedItem.text }}</div>
      <div>Color: {{ colorHashByColorName[selectedItem.color] }}</div>
    </div>
    <div class="rendering-menu">
      With <input v-model="amount" /> data in <input v-model="line" /> columns
    </div>
    <div class="collection">
      <GraphicalObjectsList
        :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
        :collection="items"
        :height="1200"
        :width="width"
        :selected-item-id="selectedItem.id"
        @selectedItemChange="onSelectedItemChange"
      >
        <div
          slot="cell"
          slot-scope="props"
          :class="[
            'card',
            props.data.color,
            { isSelected: props.data.id === selectedItem.id },
          ]"
          @click="onSelectItem(props.data)"
        >
          {{ props.data.text }}
        </div>
      </GraphicalObjectsList>
    </div>
  </div>
</template>

<script>
// utils
import getRandomColor from '@/utils/getRandomColor'

//services
import GraphicalObjectsList from "@/components/GraphicalObjectsList.vue";

export default {
  name: "App",

  components: { GraphicalObjectsList },

  data() {
    return {
      amount: "100000",
      line: "30",
      selectedItem: {
        id: "",
        color: "",
      },
      width:
        (document.body.clientWidth || document.documentElement.clientWidth) -
        20,
    };
  },
  computed: {
    colorHashByColorName() {
      return {
        color0: "rgb(108, 85, 84)",
        color1: "rgb(255, 235, 59)",
        color2: "rgb(255, 152, 0)",
        color3: "rgb(33, 150, 243)",
        color4: "rgb(55, 64, 70)",
        color5: "rgb(103, 58, 183)",
        color6: "rgb(63, 81, 181)",
        color7: "rgb(76, 175, 80)",
      };
    },
    items() {
      const amount = +this.amount;
      const line = +this.line;
      const columnHeight = new Array(line).fill(0);
      return new Array(amount).fill(1).map((_, index) => {
        const column = index % line;
        const height = 50;
        const result = {
          data: {
            id: Math.random(),
            text: `#${index}`,
            color: getRandomColor(),
          },
          height,
          width: 75,
          x: column * 85,
          y: columnHeight[column],
        };
        columnHeight[column] += height + 10;
        return result;
      });
    },
  },
  methods: {
    onSelectedItemChange(item) {
      this.selectedItem = item.data
    },
    onSelectItem(item) {
      this.selectedItem = item;
    },
    cellSizeAndPositionGetter(item, index) {
      const { data, ...sizeAndPosition } = item;
      return sizeAndPosition;
    },
  },
};
</script>
