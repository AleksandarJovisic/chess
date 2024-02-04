<template>
  <div class="sidebar-div">
    <button class="reset-button" @click="resetMoves">  {{ $t('Buttons.reset') }}
</button>
    <p class="sidebar-headline">{{ $t('Sidebar.headline') }}</p>
    <div>
      <div class="move-class" v-for="(move, index) in moves" :key="index" :class="{ 'move-class': true, 'move-class-even': index % 2 === 0 }">
        {{index + 1 + ": " + move.row + move.col  + " " }}
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useChessboardStore } from '../stores/chessBoard';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const chessboardStore = useChessboardStore();
    const moves = computed(() => chessboardStore.moves);

    return {
      moves,
      resetMoves: chessboardStore.resetMoves,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/sidebar.scss";
</style>
