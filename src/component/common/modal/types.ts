export interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  onToggle?: any;
}

export interface ModalDivProps {
  show?: boolean;
  toggleModalShow?: () => void;
}
