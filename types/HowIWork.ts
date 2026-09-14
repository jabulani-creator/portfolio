export type ProcessStep = {
  title: string;
  description: string;
  order: number;
};

type HowIWorkContent = {
  _id: string;
  intro: string;
  processSteps: ProcessStep[];
  scopeBoundaryLine: string;
  buildFollowOnSummary: string;
};

export default HowIWorkContent;
