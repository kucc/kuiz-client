export interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  onToggle?: () => void;
}

export interface ModalDivProps {
  show?: boolean;
  toggleModalShow?: () => void;
}
