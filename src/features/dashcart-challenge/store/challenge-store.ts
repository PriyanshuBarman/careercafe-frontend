import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ChallengeFormData } from "../schemas/form-schema";

export const CHALLENGE_TIME_LIMIT_IN_MINUTES = 90;

interface ChallengeState {
  // Form & Steps State
  currentStep: number;
  maxStepReached: number;
  formDraft: Partial<ChallengeFormData> | null;
  // Timer State
  hasStarted: boolean;
  isCompleted: boolean;
  startedAt: number | null;
  deadlineTimestamp: number | null;
}

interface ChallengeActions {
  // Form & Steps Actions
  setCurrentStep: (step: number) => void;
  setMaxStepReached: (step: number) => void;
  saveFormDraft: (data: Partial<ChallengeFormData>) => void;
  clearFormDraft: () => void;
  resetChallenge: () => void;
  // Timer Actions
  startChallenge: () => void;
  completeChallenge: () => void;
}

export type ChallengeStore = ChallengeState & ChallengeActions;

export const DEFAULT_CHALLENGE_STATE: ChallengeState = {
  // Timer State
  hasStarted: false,
  isCompleted: false,
  startedAt: null,
  deadlineTimestamp: null,

  // Form & Steps State
  currentStep: 0,
  maxStepReached: 0,
  formDraft: null,
};

export const useChallengeStore = create<ChallengeStore>()(
  persist(
    (set) => ({
      ...DEFAULT_CHALLENGE_STATE,

      setCurrentStep: (currentStep: number) => {
        set((state) => ({
          currentStep,
          maxStepReached: Math.max(state.maxStepReached, currentStep),
        }));
      },

      setMaxStepReached: (maxStepReached: number) => {
        set({ maxStepReached });
      },

      saveFormDraft: (data: Partial<ChallengeFormData>) => {
        set((state) => ({
          formDraft: {
            ...state.formDraft,
            ...data,
          },
        }));
      },

      clearFormDraft: () => {
        set({ formDraft: null });
      },

      completeChallenge: () => {
        set({
          hasStarted: true, // Keep true to avoid instruction dialog flashing during page transition
          isCompleted: true,
          startedAt: null,
          deadlineTimestamp: null,
          formDraft: null,
          currentStep: 0,
          maxStepReached: 0,
        });
      },

      resetChallenge: () => {
        set({
          ...DEFAULT_CHALLENGE_STATE,
        });
      },

      // Timer Actions
      startChallenge: () => {
        const now = Date.now();
        set({
          hasStarted: true,
          isCompleted: false,
          startedAt: now,
          deadlineTimestamp: now + CHALLENGE_TIME_LIMIT_IN_MINUTES * 60 * 1000,
          currentStep: 0,
          maxStepReached: 0,
          formDraft: null,
        });
      },
    }),
    {
      name: "dashcart_challenge_store",
    },
  ),
);
