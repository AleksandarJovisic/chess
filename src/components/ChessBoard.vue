<template>
  <div class="board-div">
        <div v-for="row in reversedRows" :key="row" class="board-row">
        <div
          v-for="(label, index) in labels"
          :key="label"
          class="board-square"
          :class="{ highlighted: isHighlighted(row, label) }"
          @click="selectSquare(row, label)"
        >
        <span class="label" v-if="isBottomRow(row) || isHighlighted(row, label)">{{ label }}</span>
        <span class="row-number" v-if="isLastColumn(index) || isHighlighted(row, label)">{{ row }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from 'vue';
  import { useChessboardStore  } from '../stores/chessBoard';
  import type { Square } from '../types/Square' 
 
  
  export default defineComponent({
    name: 'ChessBoard',
    setup() {
      const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const reversedRows = [8, 7, 6, 5, 4, 3, 2, 1];
      const chessboardStore = useChessboardStore()

      const selectedSquare = ref<Square | null>(null);
      const moves = chessboardStore.moves

      const isHighlighted = (row: number, col: string): boolean => {
        return selectedSquare.value !== null && selectedSquare.value.row === row && selectedSquare.value.col === col;
      };

      const addToMoves = (payload: Square) => { 
        chessboardStore.addToMoves(payload)
      }

      const isBottomRow = (row: number): boolean => {
        return row === reversedRows[reversedRows.length - 1];
      };

      const isLastColumn = (index: number): boolean => {
        return index === labels.length - 1;
      };

      const selectSquare = (row: number, col: string): void => {
        selectedSquare.value = { row, col };
        addToMoves(selectedSquare.value)
      };
  
      return {
        selectedSquare,
        labels,
        reversedRows,
        moves,
        isHighlighted,
        selectSquare,
        isBottomRow,
        isLastColumn
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  @import "@/scss/chessBoard.scss";
  </style>
  