// scmeStateMachine.ts
export type Stage = 'A'|'B'|'C'|'D';
export type Substate = 'idle'|'editing'|'rendering'|'review';

export type Payload = {
  idea: { text: string; genres: string[] };
  characters: { protagonist: any; antagonist: any };
  world: any;
  plot: any;
};

export type Job = {
  id: string;
  type: string;
  status: 'pending'|'processing'|'done'|'failed';
  promptSnapshot?: string;
  requestedBy?: string;
  asset?: any | null;
  createdAt?: string;
};

export type Asset = { id: string; type: string; url: string; createdAt?: string };

export type ProjectState = {
  id: string;
  stage: Stage;
  substate: Substate;
  lockedBy: string | null;
  version: number;
  payload: Payload;
  jobs: Job[];
  assets: Asset[];
  history: any[];
};

export const makeNewProject = (overrides: Partial<ProjectState> = {}): ProjectState => ({
  id: overrides.id || `proj-${Date.now()}`,
  stage: overrides.stage || 'A',
  substate: overrides.substate || 'idle',
  lockedBy: null,
  version: overrides.version || 0,
  payload: overrides.payload || {
    idea: { text: '', genres: [] },
    characters: { protagonist: {}, antagonist: {} },
    world: { timeline: 'Modern Day', atmosphere: 'Noir / Misterius', detail: '' },
    plot: { act1: '', act2: '', act3: '', act4: '' }
  },
  jobs: overrides.jobs || [],
  assets: overrides.assets || [],
  history: overrides.history || []
});

// Minimal ACTIONS + reducer would be added in your project (see conversation snippets).
