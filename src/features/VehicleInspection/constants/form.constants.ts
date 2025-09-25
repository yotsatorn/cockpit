export const INITIAL_FORM_VALUES = {
  branchCode: "",
  docNumber: "",
  date: "",
  time: "",
  license: "",
  shift: "",
  brand: "",
  model: "",
  phone: "",
  status: {
    needMaintenance: false,
    needReview: false,
    normal: false,
  },
  // -------------------------------
  // step 2
  // -------------------------------
  frontLeft: {
    condition: { normal: false, damaged: false, punctured: false },
    appearance: {
      bald: false,
      cracked: false,
      irregular: false,
      puncture: false,
    },
    pressure: { first: "0", second: "0" },
    treadDepth: { main: "0", decimal: "0" },
  },
  frontRight: {
    condition: { normal: false, damaged: false, punctured: false },
    appearance: {
      bald: false,
      cracked: false,
      irregular: false,
      puncture: false,
    },
    pressure: { first: "0", second: "0" },
    treadDepth: { main: "0", decimal: "0" },
  },
  rearLeft: {
    condition: { normal: false, damaged: false, punctured: false },
    appearance: {
      bald: false,
      cracked: false,
      irregular: false,
      puncture: false,
    },
    pressure: { first: "0", second: "0" },
    treadDepth: { main: "0", decimal: "0" },
  },
  rearRight: {
    condition: { normal: false, damaged: false, punctured: false },
    appearance: {
      bald: false,
      cracked: false,
      irregular: false,
      puncture: false,
    },
    pressure: { first: "0", second: "0" },
    treadDepth: { main: "0", decimal: "0" },
  },
  psiReadable: false,
  psiReading: "",
  // -------------------------------
  // step 3
  // -------------------------------
  engineOil: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },
  powerSteerOil: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },
  clutchOil: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },
  reservoirWater: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },
  brakeOil: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },
  washerWater: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },
  atOil: {
    changed: false,
    refilled: false,
    colorRed: false,
    colorBlue: false,
    levelHigh: false,
    levelLow: false,
  },

  batteryChanged: false,
  batteryVoltage: {
    v12_4: false,
    v12_5: false,
    v12_6: false,
    v12_7: false,
    v12_8: false,
  },
  batteryStartVoltage: { v9: false, v10: false, v11: false },
  batteryCCA: { ok: false, below: false },
  // -------------------------------
  // step 4
  // -------------------------------
  description: "",
  ownerSignature: "",
  inspectorSignature: "",
};
