import { LegislativeProposal } from "@prisma/client";
import { omit } from 'lodash';

export type LegislativeProposalPrimitive = Omit<LegislativeProposal, 'afgoerelsesresultatkode' | 'afgoerelsesdato' | 'afgoerelse'> & {
  afgørelsesresultatkode?: string | null;
  afgørelsesdato?: Date | null;
  afgørelse?: string | null;
};

export type GetLegislativeProposalsResponse = {
  'odata.metadata': string;
  value: LegislativeProposalPrimitive[];
  'odata.nextLink'?: string;
}

export const mapProposalToPrimitive = (proposal: LegislativeProposal) => {
  const mappedObject: LegislativeProposalPrimitive = {
    ...omit(proposal, ['afgoerelse', 'afgoerelsesdato', 'afgoerelsesresultatkode']),
      
    afgørelse: proposal.afgoerelse,
    afgørelsesdato: proposal.afgoerelsesdato ? new Date(proposal.afgoerelsesdato) : null,
    afgørelsesresultatkode: proposal.afgoerelsesresultatkode,
  };

  return mappedObject;
}

export const mapPrimitiveToProposal = (primitive: LegislativeProposalPrimitive) => {
  const mappedObject: LegislativeProposal = {
    ...omit(primitive, ['afgørelse', 'afgørelsesdato', 'afgørelsesresultatkode']),
      
    afgoerelse: primitive.afgørelse ?? null,
    afgoerelsesdato: primitive.afgørelsesdato ? new Date(primitive.afgørelsesdato) : null,
    afgoerelsesresultatkode: primitive.afgørelsesresultatkode?? null,
  };

  return mappedObject;
}