import React from 'react';
import bannerStyle from './bannerStyle';

export default (props = {}) => {
  const {
    styles = {},
    className = '',
    message = 'No text',
    policyLink = '/#',
    privacyPolicyLinkText = 'Privacy Policy',
    showPreferButton = true,
    acceptButtonText = 'Accept',
    PreferButtonText = 'Preferències',
    onConfirmAll = Function,
    onPrefer = Function
  } = props;

  const {
    dialog: dialogStyle,
    container: containerStyle,
    message: messageStyle,
    policy: policyStyle,
    buttonWrapper: buttonWrapperStyle,
    button: buttonStyle,
  } = { ...bannerStyle, ...styles };


  return (
    <div className={`react-cookie-law-dialog ${className}`} style={dialogStyle}>
      <div className="react-cookie-law-container" style={containerStyle}>
        <div className="react-cookie-law-msg" style={messageStyle}>{message}</div>
        
        <a href={policyLink} className="react-cookie-law-policy" style={policyStyle}>{privacyPolicyLinkText}</a>
        
        <div className="react-cookie-law-button-wrapper" style={buttonWrapperStyle}>
          {
            showPreferButton && (
              <button type="button" className="react-cookie-law-decline-btn" style={buttonStyle} onClick={() => onPrefer()}>
                <span>{PreferButtonText}</span>
              </button>
            )
          }

          <button type="button" className="react-cookie-law-accept-btn" style={buttonStyle} onClick={() => onConfirmAll()}>
            <span>{acceptButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
