import React from 'react';
import PropTypes from 'prop-types';

const DealerButton = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <circle cx="19" cy="19" r="19" fill="#E8E1D0" />
      <mask id="path-2-inside-1" fill="white">
        <path d="M38 19C38 29.5018 29.5018 38 19 38C8.49815 38 -3.05176e-05 29.5018 -3.05176e-05 19C-3.05176e-05 8.49818 8.49815 0 19 0C29.5018 0 38 8.49818 38 19ZM20.7272 5.28545C24.4063 5.75182 27.7572 7.68636 30.0027 10.64L33.0082 8.91273C31.5888 6.91155 29.7595 5.23568 27.6419 3.99671C25.5244 2.75774 23.1672 1.98409 20.7272 1.72727V5.28545ZM4.99179 8.91273L7.99724 10.64C9.11069 9.17669 10.5043 7.94963 12.0967 7.03033C13.6892 6.11103 15.4487 5.51788 17.2727 5.28545V1.72727C14.8328 1.98409 12.4756 2.75774 10.358 3.99671C8.24043 5.23568 6.41109 6.91155 4.99179 8.91273ZM3.26452 26.0818L6.2527 24.3545C5.54295 22.6586 5.17745 20.8385 5.17745 19C5.17745 17.1615 5.54295 15.3414 6.2527 13.6455L3.26452 11.9182C2.24872 14.1409 1.72299 16.5562 1.72299 19C1.72299 21.4438 2.24872 23.8591 3.26452 26.0818ZM17.2727 32.7145C15.4487 32.4821 13.6892 31.889 12.0967 30.9697C10.5043 30.0504 9.11069 28.8233 7.99724 27.36L4.99179 29.0873C6.41109 31.0885 8.24043 32.7643 10.358 34.0033C12.4756 35.2423 14.8328 36.0159 17.2727 36.2727V32.7145ZM33.0082 29.0873L30.0027 27.36C28.8893 28.8233 27.4957 30.0504 25.9032 30.9697C24.3108 31.889 22.5513 32.4821 20.7272 32.7145V36.1691C25.65 35.6682 30.1236 33.0945 33.0082 29.0873ZM34.7354 26.0818C36.7909 21.5909 36.7909 16.4091 34.7354 11.9182L31.7472 13.6455C32.457 15.3414 32.8225 17.1615 32.8225 19C32.8225 20.8385 32.457 22.6586 31.7472 24.3545L34.7354 26.0818Z" />
      </mask>
      <path
        d="M38 19C38 29.5018 29.5018 38 19 38C8.49815 38 -3.05176e-05 29.5018 -3.05176e-05 19C-3.05176e-05 8.49818 8.49815 0 19 0C29.5018 0 38 8.49818 38 19ZM20.7272 5.28545C24.4063 5.75182 27.7572 7.68636 30.0027 10.64L33.0082 8.91273C31.5888 6.91155 29.7595 5.23568 27.6419 3.99671C25.5244 2.75774 23.1672 1.98409 20.7272 1.72727V5.28545ZM4.99179 8.91273L7.99724 10.64C9.11069 9.17669 10.5043 7.94963 12.0967 7.03033C13.6892 6.11103 15.4487 5.51788 17.2727 5.28545V1.72727C14.8328 1.98409 12.4756 2.75774 10.358 3.99671C8.24043 5.23568 6.41109 6.91155 4.99179 8.91273ZM3.26452 26.0818L6.2527 24.3545C5.54295 22.6586 5.17745 20.8385 5.17745 19C5.17745 17.1615 5.54295 15.3414 6.2527 13.6455L3.26452 11.9182C2.24872 14.1409 1.72299 16.5562 1.72299 19C1.72299 21.4438 2.24872 23.8591 3.26452 26.0818ZM17.2727 32.7145C15.4487 32.4821 13.6892 31.889 12.0967 30.9697C10.5043 30.0504 9.11069 28.8233 7.99724 27.36L4.99179 29.0873C6.41109 31.0885 8.24043 32.7643 10.358 34.0033C12.4756 35.2423 14.8328 36.0159 17.2727 36.2727V32.7145ZM33.0082 29.0873L30.0027 27.36C28.8893 28.8233 27.4957 30.0504 25.9032 30.9697C24.3108 31.889 22.5513 32.4821 20.7272 32.7145V36.1691C25.65 35.6682 30.1236 33.0945 33.0082 29.0873ZM34.7354 26.0818C36.7909 21.5909 36.7909 16.4091 34.7354 11.9182L31.7472 13.6455C32.457 15.3414 32.8225 17.1615 32.8225 19C32.8225 20.8385 32.457 22.6586 31.7472 24.3545L34.7354 26.0818Z"
        fill="#F7F2DC"
        stroke="#6297B5"
        stroke-width="4"
        mask="url(#path-2-inside-1)"
      />
      <path
        d="M18.3 11.84C20.66 11.84 22.4267 12.4333 23.6 13.62C24.7733 14.7933 25.36 16.5066 25.36 18.76C25.36 20.2133 25.0733 21.4866 24.5 22.58C23.9267 23.6733 23.0933 24.52 22 25.12C20.92 25.7066 19.6267 26 18.12 26L16.96 25.98C16.2133 25.9533 15.6667 25.94 15.32 25.94C14.2267 25.94 13.4 25.96 12.84 26V25.6C13.32 25.5733 13.6667 25.52 13.88 25.44C14.1067 25.36 14.26 25.2066 14.34 24.98C14.42 24.7533 14.46 24.3866 14.46 23.88V13.96C14.46 13.4533 14.42 13.0866 14.34 12.86C14.26 12.6333 14.1067 12.48 13.88 12.4C13.6667 12.32 13.32 12.2666 12.84 12.24V11.84C13.3067 11.88 13.9533 11.9 14.78 11.9L16.48 11.88C17.3867 11.8533 17.9933 11.84 18.3 11.84ZM17.8 12.2C17.3867 12.2 17.0733 12.2466 16.86 12.34C16.66 12.4333 16.52 12.6 16.44 12.84C16.36 13.08 16.32 13.44 16.32 13.92V23.92C16.32 24.4 16.36 24.76 16.44 25C16.52 25.24 16.66 25.4066 16.86 25.5C17.0733 25.5933 17.3933 25.64 17.82 25.64C19.2333 25.64 20.3467 25.3866 21.16 24.88C21.9733 24.36 22.54 23.6066 22.86 22.62C23.1933 21.6333 23.36 20.3733 23.36 18.84C23.36 17.3066 23.18 16.06 22.82 15.1C22.46 14.1266 21.8733 13.4 21.06 12.92C20.26 12.44 19.1733 12.2 17.8 12.2Z"
        fill="#6297B5"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="38" height="38" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

DealerButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

DealerButton.defaultProps = {
  width: '40',
  height: '40',
};

export default DealerButton;
