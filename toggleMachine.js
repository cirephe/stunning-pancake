import { createMachine } from 'xstate';

const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCSAdgIYDGyAlgG5gDEaG2A2gAwC6ioADqrORagQ4gAHogCMATgAcOAMwB2AKwAaEAE9xU5gF9tq+llwBBMlVoGmbId179BSEeOlylqjQgk69IC8dPUaWGwwThZ2Bxs+cgEhUQRZKTEcaQAWBRV1RAAmFOYcADZCouLC+V1vAlQIOCFfax4omIc4sSy3RABaMUUZWWYs5ilZYZHhsV19dEN8Yn8wetto+1A4-OZ2j3ycMRLd-LLvXxwTCmoFxuXHeKksnFys2TTXTIQOrTl+wdHviZ8p7BwAGVgpxyAQoOc7LFELJ8hJklInhl3H08nsSgddEA */
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