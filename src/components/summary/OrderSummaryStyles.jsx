import styled from "styled-components";

export const SummaryList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  color: ${({ $highlight }) => ($highlight ? "var(--success)" : "var(--text)")};

  dt,
  dd {
    margin: 0;
  }

  dd {
    font-weight: 600;
    color: ${({ $highlight }) => ($highlight ? "var(--success)" : "var(--ink)")};
    white-space: nowrap;
  }
`;

export const VatNote = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--muted);
  text-align: right;
`;

export const TotalRow = styled(SummaryRow)`
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);

  dd {
    font-size: 22px;
    font-weight: 700;
  }
`;
