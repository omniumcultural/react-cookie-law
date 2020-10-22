import React from 'react';
import PropTypes from 'prop-types';
import Cookies from '../Cookies';
import CookiePanelContent from './CookiePanelContent';
import { isServer } from '../helpers';

const CONSENT_GIVEN = 'rcl_consent_given';
const PREFERENCES_COOKIE = 'rcl_preferences_consent';
const STATISTICS_COOKIE = 'rcl_statistics_consent';
const MARKETING_COOKIE = 'rcl_marketing_consent';

class CookiePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preferencesCookies: false,
      statisticsCookies: false,
      marketingCookies: false,
    };

    this.onScroll = this.onScroll.bind(this);
    this.confirm = this.confirm.bind(this);
    this.decline = this.decline.bind(this);
    this.onPrefer = this.onPrefer.bind(this);
    this.consetsCallback = this.consetsCallback.bind(this);

    this.cookies = new Cookies(this.props.wholeDomain);
  }

  componentDidMount() {
    const { dismissOnScroll } = this.props;

    if (isServer() || dismissOnScroll !== true) {
      return;
    }

    if (window.addEventListener) {
      window.addEventListener('scroll', this.onScroll);
    } else if (window.attachEvent) {
      window.attachEvent('onscroll', this.onScroll); // < IE9
    }
  }

  componentWillUnmount() {
    if (isServer()) {
      return;
    }

    if (window.removeEventListener) {
      window.removeEventListener('scroll', this.onScroll);
    } else if (window.detachEvent) {
      window.detachEvent('onscroll', this.onScroll); // < IE9
    }
  }

  onScroll() {
    this.confirm();
  }

  onTogglePreferencesCookies() {
    const { preferencesCookies } = this.state;
    this.setState({ preferencesCookies: !preferencesCookies });
  }

  onToggleStatisticsCookies() {
    const { statisticsCookies } = this.state;
    this.setState({ statisticsCookies: !statisticsCookies });
  }

  onToggleMarketingCookies() {
    const { marketingCookies } = this.state;
    this.setState({ marketingCookies: !marketingCookies });
  }

  confirm() {
    const { preferencesCookies, statisticsCookies, marketingCookies } = this.state;

    this.cookies.set(CONSENT_GIVEN);

    if (preferencesCookies) {
      this.cookies.set(PREFERENCES_COOKIE);
    } else {
      this.cookies.remove(PREFERENCES_COOKIE);
    }

    if (statisticsCookies) {
      this.cookies.set(STATISTICS_COOKIE);
    } else {
      this.cookies.remove(STATISTICS_COOKIE);
    }

    if (marketingCookies) {
      this.cookies.set(MARKETING_COOKIE);
    } else {
      this.cookies.remove(MARKETING_COOKIE);
    }

    this.forceUpdate();
  }

  decline() {
    const {
      onDeclinePreferences = Function,
      onDeclineStatistics = Function,
      onDeclineMarketing = Function,
    } = this.props;

    this.cookies.set(CONSENT_GIVEN);
    this.cookies.remove(PREFERENCES_COOKIE);
    this.cookies.remove(STATISTICS_COOKIE);
    this.cookies.remove(MARKETING_COOKIE);

    onDeclinePreferences();
    onDeclineStatistics();
    onDeclineMarketing();

    this.forceUpdate();
  }

  onPrefer() {
    console.log(pas);
    this.setPas(false);
  }

  consetsCallback() {
    const {
      onAccept = Function,
      onAcceptPreferences = Function,
      onAcceptStatistics = Function,
      onAcceptMarketing = Function,
      onDeclinePreferences = Function,
      onDeclineStatistics = Function,
      onDeclineMarketing = Function,
    } = this.props;

    const hasPreferencesCookie = this.cookies.get(PREFERENCES_COOKIE);
    const hasStatisticsCookie = this.cookies.get(STATISTICS_COOKIE);
    const hasMarketingCookie = this.cookies.get(MARKETING_COOKIE);

    onAccept();

    if (hasPreferencesCookie) {
      onAcceptPreferences();
    } else {
      onDeclinePreferences();
    }

    if (hasStatisticsCookie) {
      onAcceptStatistics();
    } else {
      onDeclineStatistics();
    }

    if (hasMarketingCookie) {
      onAcceptMarketing();
    } else {
      onDeclineMarketing();
    }
  }

  render() {
    const {
      styles,
      className,
      message,
      policyLink,
      privacyPolicyLinkText,
      necessaryOptionText,
      preferencesOptionText,
      statisticsOptionText,
      marketingOptionText,
      showPreferButton,
      acceptButtonText,
      PreferButtonText,
      showPreferencesOption,
      showStatisticsOption,
      showMarketingOption,
    } = this.props;

    if (this.cookies.get(CONSENT_GIVEN)) {
      this.consetsCallback();
      return null;
    }

    const contentProps = {
      styles,
      className,
      message,
      policyLink,
      privacyPolicyLinkText,
      necessaryOptionText,
      preferencesOptionText,
      statisticsOptionText,
      marketingOptionText,
      showPreferButton,
      acceptButtonText,
      PreferButtonText,
      showPreferencesOption,
      showStatisticsOption,
      showMarketingOption,
      onTogglePreferencesCookies: this.onTogglePreferencesCookies,
      onToggleStatisticsCookies: this.onToggleStatisticsCookies,
      onToggleMarketingCookies: this.onToggleMarketingCookies,
      onDecline: this.decline,
      onConfirm: this.confirm,
      onPrefer: this.onPrefer
    };

    return (<CookiePanelContent {...contentProps} />);
  }
}

CookiePanel.protoTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  message: PropTypes.string.isRequired,
  wholeDomain: PropTypes.bool,
  policyLink: PropTypes.string,
  privacyPolicyLinkText: PropTypes.string,
  necessaryOptionText: PropTypes.string,
  preferencesOptionText: PropTypes.string,
  statisticsOptionText: PropTypes.string,
  marketingOptionText: PropTypes.string,
  acceptButtonText: PropTypes.string,
  PreferButtonText: PropTypes.string,
  showPreferButton: PropTypes.bool,
  dismissOnScroll: PropTypes.bool,
  showPreferencesOption: PropTypes.bool,
  showStatisticsOption: PropTypes.bool,
  showMarketingOption: PropTypes.bool,
  onAccept: PropTypes.func,
  onAcceptPreferences: PropTypes.func,
  onAcceptStatistics: PropTypes.func,
  onAcceptMarketing: PropTypes.func,
  onDeclinePreferences: PropTypes.func,
  onDeclineStatistics: PropTypes.func,
  onDeclineMarketing: PropTypes.func,
};

export default CookiePanel;
