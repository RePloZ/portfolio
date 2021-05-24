import create from 'zustand'

interface PositionState {
  top: number
  changePosition: (top: number) => void
}

export const useStorePosition = create<PositionState>(set => ({
  top: 0,
  changePosition: top => set(() => ({ top }))
}))