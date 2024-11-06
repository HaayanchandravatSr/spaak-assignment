import { LegislativeProposal } from "@prisma/client";

export type LegislativeProposalPrimitive = Omit<LegislativeProposal, 'afgoerelsesresultatkode' | 'afgoerelsesdato' | 'afgoerelse'> & {
  afgørelsesresultatkode?: string;
  afgørelsesdato?: Date;
  afgørelse?: string;
};

export type GetLegislativeProposalsResponse = {
  'odata.metadata': string;
  value: LegislativeProposalPrimitive[];
  'odata.nextLink'?: string;
}