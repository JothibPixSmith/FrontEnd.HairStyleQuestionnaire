export interface FormState {
  // Section 1
  hairTexture: string;
  lorealScale: number | null;
  strandThickness: string;
  hairDensity: string;
  // Section 2
  waterSoakTime: string;
  airDryTime: string;
  oilAbsorption: string;
  proteinResponse: string;
  heavyProductResponse: string;
  // Section 3
  colorSituation: string;
  lastColorService: string;
  chemicalProcessing: string;
  // Section 4
  washFrequency: string;
  shampooType: string;
  deepCondition: string;
  // Section 5
  heatFrequency: string;
  waterType: string;
  climate: string;
  // Section 6
  frustrations: string[];
  didntWork: string;
  bestHairEver: string;
  // Section 7
  timeSpent: string;
  budget: string;
  shoppingLocation: string;
  // Section 8
  ultimateGoal: string;
  knowledgeLevel: string;
}

export const defaultFormState: FormState = {
  hairTexture: '',
  lorealScale: null,
  strandThickness: '',
  hairDensity: '',
  waterSoakTime: '',
  airDryTime: '',
  oilAbsorption: '',
  proteinResponse: '',
  heavyProductResponse: '',
  colorSituation: '',
  lastColorService: '',
  chemicalProcessing: '',
  washFrequency: '',
  shampooType: '',
  deepCondition: '',
  heatFrequency: '',
  waterType: '',
  climate: '',
  frustrations: [],
  didntWork: '',
  bestHairEver: '',
  timeSpent: '',
  budget: '',
  shoppingLocation: '',
  ultimateGoal: '',
  knowledgeLevel: '',
};
