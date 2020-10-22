import React from 'react';
import CookieOption from './CookieOption';
import bannerStyle from './bannerStyle';

export default (props = {}) => {
  const {
    styles = {},
    className = '',
    message = 'No text',
    policyLink = '/#',
    privacyPolicyLinkText = 'Privacy Policy',
    necessaryOptionText = 'Necessary',
    preferencesOptionText = 'Preferences',
    statisticsOptionText = 'Statistics',
    marketingOptionText = 'Marketing',
    showPreferButton = true,
    acceptButtonText = 'Accept',
    PreferButtonText = 'Preferències',
    showPreferencesOption = true,
    showStatisticsOption = true,
    showMarketingOption = true,
    onTogglePreferencesCookies = Function,
    onToggleStatisticsCookies = Function,
    onToggleMarketingCookies = Function,
    onDecline = Function,
    onConfirm = Function,
  } = props;

  const {
    dialog: dialogStyle,
    container: containerStyle,
    message: messageStyle,
    policy: policyStyle,
    selectPane: selectPaneStyle,
    optionWrapper: optionWrapperStyle,
    optionLabel: optionLabelStyle,
    checkbox: checkboxStyle,
    buttonWrapper: buttonWrapperStyle,
    button: buttonStyle,
  } = { ...bannerStyle, ...styles };

  const cookieOptionStyle = { optionWrapperStyle, optionLabelStyle, checkboxStyle };

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

          <button type="button" className="react-cookie-law-accept-btn" style={buttonStyle} onClick={() => onConfirm()}>
            <span>{acceptButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
