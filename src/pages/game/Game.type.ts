export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'PRODUCE_AUTOMATIC_CLIPS' }
  | { type: 'INCREASE_CLIPS_COST' }
  | { type: 'DECREASE_CLIPS_COST' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_AUTOCLIPPERS' }
  | { type: 'BUY_MEGACLIPPERS' }
  | { type: 'BUY_MARKETING' }
  | { type: 'INCREASE_PROCESSORS' }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_TRUST'; trust: number }
  | { type: 'UPDATE_WIRE_QUANTITY'; quantity: number }
  | { type: 'UPDATE_CLIPS_BONUS'; bonus: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'DECREASE_OPERATIONS'; operations: number }
  | { type: 'UPDATE_FEATURE'; feature: string; show: boolean; animate: boolean }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsTransit: number;
  clipsPerSecond: number;
  clipsBonus: number;
  funds: number;
  fundsPerSecond: number;
  wires: number;
  wiresCost: number;
  wiresStock: number;
  wiresBonus: number;
  publicDemand: number;
  marketing: number;
  marketingCost: number;
  autoClippers: number;
  autoClippersCost: number;
  autoClippersBonus: number;
  megaClippers: number;
  megaClippersCost: number;
  productionBonus: number;
  trust: number;
  trustTransit: number;
  trustCost: number;
  processors: number;
  memory: number;
  operations: number;
  operationsLimit: number;
  creativity: number;
  marketingFeature: {
    show: boolean;
    animate: boolean;
  };
  resourcesFeature: {
    show: boolean;
    animate: boolean;
  };
  revTrackerFeature: {
    show: boolean;
    animate: boolean;
  };
  fundsPerSecondFeature: {
    show: boolean;
    animate: boolean;
  };
  megaClippersFeature: {
    show: boolean;
    animate: boolean;
  };
  driosReInitializationFeature: {
    show: boolean;
    animate: boolean;
  };
}
