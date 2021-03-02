export interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  toggleModal?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ModalDivProps {
  show?: boolean;
  toggleModalShow?: () => void;
}
