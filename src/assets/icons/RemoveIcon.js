const RemoveIcon = ({ color = "#A00706" }) => (
  <svg
    width="50"
    height="51"
    viewBox="0 0 50 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_799_21420)">
      <circle
        cx="25.1094"
        cy="21.5614"
        r="19.6836"
        transform="rotate(-0.11366 25.1094 21.5614)"
        fill={color}
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M35.0345 27.8673L28.69 21.554L35.0032 15.2097C35.0032 15.2096 35.0033 15.2095 35.0034 15.2095C35.9894 14.2194 35.9861 12.6153 34.9961 11.6291C34.006 10.6429 32.4017 10.6461 31.4155 11.6362L31.4154 11.6364L25.102 17.9809L18.7577 11.6677C18.7576 11.6676 18.7576 11.6676 18.7575 11.6675C17.7674 10.6815 16.1633 10.6847 15.1772 11.6748C14.191 12.6649 14.1941 14.2691 15.1843 15.2553L15.1844 15.2555L21.5289 21.5688L15.2157 27.9132C15.2157 27.9132 15.2156 27.9133 15.2155 27.9133C14.2295 28.9035 14.2328 30.5076 15.2228 31.4937C16.2129 32.4799 17.8172 32.4767 18.8034 31.4866L18.8035 31.4864L25.1169 25.142L31.4612 31.4551C31.4613 31.4552 31.4613 31.4553 31.4614 31.4553C32.4515 32.4413 34.0556 32.4381 35.0417 31.448C36.0279 30.4579 36.0248 28.8537 35.0346 27.8675L35.0345 27.8673Z"
        fill="white"
        stroke="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_799_21420"
        x="0.425781"
        y="0.877808"
        width="49.3672"
        height="49.3672"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_799_21420"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_799_21420"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default RemoveIcon;
