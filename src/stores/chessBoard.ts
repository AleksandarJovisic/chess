import { defineStore } from 'pinia'
import type { Square } from '@/types/Square'

export const useChessboardStore = defineStore('chessBoard',{
    state: () => ({
        moves: [] as Square[]
    }),
    actions: {
        addToMoves(payload: Square){
            this.moves.push({ ...payload });
        },
        resetMoves(){
            this.moves = []
        }
    }
})

