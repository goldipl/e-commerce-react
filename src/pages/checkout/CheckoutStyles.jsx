import styled from "styled-components";
import { Card } from "../../components/ui";

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: 24px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px;
    font-size: 19px;
  }
`;

export const StepNumber = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--ink);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 4px;

  & + & {
    margin-top: 16px;
  }

  div + & {
    margin-top: 20px;
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
  }

  input,
  textarea {
    width: 100%;
    padding: 0 14px;
    border: 1px solid ${({ $invalid }) => ($invalid ? "var(--danger)" : "var(--border)")};
    border-radius: 10px;
    background: var(--surface);
    font-size: 15px;
    color: var(--ink);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({ $invalid }) => ($invalid ? "var(--danger)" : "var(--accent)")};
      box-shadow: 0 0 0 3px
        ${({ $invalid }) => ($invalid ? "rgba(229, 72, 77, 0.15)" : "rgba(91, 76, 255, 0.12)")};
    }
  }

  input {
    height: 46px;
  }

  textarea {
    padding: 12px 14px;
    resize: vertical;
  }

  > span {
    font-size: 12.5px;
    color: var(--danger);
  }
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionCard = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 1px solid ${({ $active }) => ($active ? "var(--accent)" : "var(--border)")};
  border-radius: var(--radius);
  background: ${({ $active }) => ($active ? "var(--accent-soft)" : "var(--surface)")};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: var(--accent);
  }

  input {
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--accent);
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  strong {
    font-size: 15px;
    color: var(--ink);
  }

  small {
    font-size: 13px;
    color: var(--muted);
  }

  em {
    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
  }
`;

export const CheckboxField = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
  cursor: pointer;

  input {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin: 2px 0 0;
    accent-color: var(--accent);
    outline: ${({ $invalid }) => ($invalid ? "2px solid var(--danger)" : "none")};
    outline-offset: 2px;
  }

  a {
    color: var(--accent);
    font-weight: 600;
  }

  em {
    display: block;
    font-style: normal;
    font-size: 12.5px;
    color: var(--danger);
  }
`;

export const SummaryCard = styled(Card)`
  position: sticky;
  top: 176px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  @media (max-width: 960px) {
    position: static;
  }
`;

export const SummaryItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 300px;
  margin: 0;
  padding: 0 0 16px;
  overflow-y: auto;
  list-style: none;
  border-bottom: 1px solid var(--border);

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
  }

  img {
    flex-shrink: 0;
    width: 44px;
    height: 58px;
    padding: 3px;
    border-radius: 6px;
    background: var(--surface-2);
    object-fit: contain;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
    color: var(--ink);
    font-weight: 500;
  }

  small {
    color: var(--muted);
    font-weight: 400;
  }

  strong {
    white-space: nowrap;
  }
`;

export const DemoNotice = styled.p`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 12px;
  border-radius: 10px;
  background: var(--surface-2);
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--text);

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    font-size: 15px;
    color: var(--accent);
  }
`;
