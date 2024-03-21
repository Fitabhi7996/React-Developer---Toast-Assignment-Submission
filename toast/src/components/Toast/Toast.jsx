import React from "react";
import "./Toast.css";
import { Info, X, Warning, WarningCircle, ThumbsUp } from "phosphor-react";
import PropTypes from "prop-types";

const Toast = ({
  message,
  hideInfoIcon,
  withoutAction,
  withoutDivider,
  notificationIcon,
  crossIcon,
  buttonAction,
  closeAction
}) => {
  return (
    <div className="toast">
      {!hideInfoIcon && renderIcon(notificationIcon)}
      <span className="message">{message}</span>
      {!withoutDivider && <div className="divider"></div>}
      {!withoutAction && (
        <button
          className="custom-button"
          onClick={buttonAction}
        >
          Button
        </button>
      )}
      {crossIcon && (
        <button
          className="close-button"
          onClick={closeAction}
        >
          <X size={24} />
        </button>
      )}
    </div>
  );
};
const renderIcon = (notificationIcon) => {
  switch (notificationIcon) {
    case "information":
      return <Info size={24} className="circle-icon" />;
    case "error":
      return <Warning size={24} className="error-icon" />;
    case "warning":
      return <WarningCircle size={24} className="warning-icon" />;
    case "success":
      return <ThumbsUp size={24} className="success-icon" />;
    default:
      return null;
  }
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,

  hideInfoIcon: PropTypes.bool,

  withoutDivider: PropTypes.bool,
  withoutAction: PropTypes.bool,
  crossIcon: PropTypes.bool,

  notificationIcon: PropTypes.oneOf([
    "default",
    "information",
    "warning",
    "error",
    "success",
  ]),
  buttonAction: PropTypes.func,
  closeAction: PropTypes.func,
  
};

export default Toast;
