import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineWarning, AiOutlineClose } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { ShopContext } from "../../context/ShopContext";
import { BASE_PATH } from "../../data/catalog";

const ICONS = {
  success: AiOutlineCheckCircle,
  info: AiOutlineInfoCircle,
  error: AiOutlineWarning,
};

export const Toast = () => {
  const { toast, setToast } = useContext(ShopContext);
  const Icon = toast ? ICONS[toast.type] || ICONS.info : null;

  return (
    <ToastRegion role="status" aria-live="polite">
      {toast && (
        <ToastBox key={toast.id} $type={toast.type}>
          <Icon aria-hidden="true" />
          <span>{toast.message}</span>
          {toast.type === "success" && (
            <Link to={`${BASE_PATH}/cart`} onClick={() => setToast(null)}>
              Koszyk
            </Link>
          )}
          <button type="button" onClick={() => setToast(null)} aria-label="Zamknij powiadomienie">
            <AiOutlineClose />
          </button>
        </ToastBox>
      )}
    </ToastRegion>
  );
};

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ToastRegion = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
  width: min(440px, calc(100% - 32px));
`;

const ToastBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 12px 12px 16px;
  border-radius: var(--radius);
  background: var(--ink);
  color: #ffffff;
  font-size: 14px;
  box-shadow: var(--shadow);
  animation: ${slideIn} 0.25s ease-out;

  > svg {
    flex-shrink: 0;
    font-size: 20px;
    color: ${({ $type }) =>
      $type === "error" ? "#ff8a8d" : $type === "success" ? "var(--lime)" : "#b7b0ff"};
  }

  span {
    flex: 1;
    line-height: 1.4;
  }

  a {
    color: var(--lime);
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    display: flex;
    padding: 4px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #ffffff;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;
