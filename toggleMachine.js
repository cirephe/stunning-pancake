import { createMachine } from 'xstate';

const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCSAdgIYDGyAlgG5gDEaG2A2gAwC6ioADqrORagQ4gAHogCMATgAcOAMwB2AKwAaEAE9xU5gF9tq+llwBBMlVoGmbId179BSEeOlylqjQgk69IC8dPUaWGwwThZ2Bxs+cgEhUQRZKTEcaQAWBRV1RAAmFOYcADZCouKiiV1vAlQIOCFfax4omIc4sSy3cSzdfXRDfGJ-MHrbaPtQOPzmdo98nDES+fz5Lp8e7BwTCmohxtHHeKz5HHlZNNdM6dmFkqXvXxwAZWDOcgIobbtYxFl8iWSpU4y7lkzDyV2KN10QA */
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: { toggle: 'Active' },
    },

    Active: {
      on: {
        toggle: 'Inactive',
        sleep: "Sleeping"
      },
      entry: "startActiveAction"
    },

    Sleeping: {}
  },
});