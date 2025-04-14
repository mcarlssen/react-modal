import React, { useEffect, useRef } from 'react';
import './Modal.css';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal is closed */
  onClose: () => void;
  /** Modal content */
  children: React.ReactNode;
  /** Modal title */
  title?: string;
  /** Whether to close modal when clicking outside */
  closeOnOutsideClick?: boolean;
  /** Whether to close modal when pressing escape key */
  closeOnEscape?: boolean;
  /** Custom class name for the modal overlay */
  overlayClassName?: string;
  /** Custom class name for the modal content */
  contentClassName?: string;
  /** Custom class name for the modal header */
  headerClassName?: string;
  /** Custom class name for the modal title */
  titleClassName?: string;
  /** Custom class name for the close button */
  closeButtonClassName?: string;
  /** Custom styles for the modal overlay */
  overlayStyle?: React.CSSProperties;
  /** Custom styles for the modal content */
  contentStyle?: React.CSSProperties;
  /** Custom styles for the modal header */
  headerStyle?: React.CSSProperties;
  /** Custom styles for the modal title */
  titleStyle?: React.CSSProperties;
  /** Custom styles for the close button */
  closeButtonStyle?: React.CSSProperties;
  /** Custom close button content */
  closeButtonContent?: React.ReactNode;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Whether to disable scrolling of the body when modal is open */
  disableBodyScroll?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  overlayClassName = '',
  contentClassName = '',
  headerClassName = '',
  titleClassName = '',
  closeButtonClassName = '',
  overlayStyle,
  contentStyle,
  headerStyle,
  titleStyle,
  closeButtonStyle,
  closeButtonContent = '×',
  showCloseButton = true,
  animationDuration = 300,
  disableBodyScroll = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && disableBodyScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, disableBodyScroll]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className={`modal-overlay ${overlayClassName}`}
      onClick={handleOverlayClick}
      style={{
        ...overlayStyle,
        animation: `fadeIn ${animationDuration}ms ease-in-out`,
      }}
    >
      <div
        className={`modal-content ${contentClassName}`}
        style={{
          ...contentStyle,
          animation: `slideIn ${animationDuration}ms ease-in-out`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className={`modal-header ${headerClassName}`} style={headerStyle}>
            {title && (
              <h2 className={`modal-title ${titleClassName}`} style={titleStyle}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={`modal-close ${closeButtonClassName}`}
                onClick={onClose}
                style={closeButtonStyle}
                aria-label="Close modal"
              >
                {closeButtonContent}
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal; 