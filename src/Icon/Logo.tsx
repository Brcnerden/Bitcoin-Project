import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={130}
    height={52}
    fill="none"
    {...props}
  >
    <rect width={42.667} height={44.778} y={2.889} fill="url(#a)" rx={5.885} />
    <path
      fill="#fff"
      d="M32.171 39h-6.86l-9.135-13.79V39h-6.86V14.325h6.86l9.135 13.965V14.325h6.86V39Z"
    />
    <path
      fill="#fff"
      d="M38.253 15.445C29.91 17.49 26.57 23.399 26.57 25.672c-.29 3.409.174 12.272.87 6.818.695-5.455 7.626-15.057 10.813-17.045ZM2.943 39c7.3-1.888 10.222-7.343 10.222-9.44.253-3.147-.152-11.33-.76-6.294C11.794 28.3 5.73 37.164 2.942 39Z"
    />
    <path
      fill="#222"
      d="M54.958 19.82v4.025h7.875v5.215h-7.875v4.445h8.925V39H48.098V14.325h15.785v5.495h-8.925Zm29.045-5.495v5.46h-9.87v4.34h7.28v5.215h-7.28V39h-6.86V14.325h16.73Zm18.499 20.65h-8.75L92.422 39h-7.21l8.995-24.675h7.91L111.077 39h-7.245l-1.33-4.025Zm-1.715-5.25-2.66-7.98-2.625 7.98h5.285Z"
    />
    <path
      fill="url(#b)"
      d="m120.345 4.333 2.431 6.45 6.569 2.386-6.569 2.387-2.431 6.45-2.431-6.45-6.569-2.387 6.569-2.386 2.431-6.45Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-6.621}
        x2={45.37}
        y1={-1.444}
        y2={51.512}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#468EF9" />
        <stop offset={1} stopColor="#0C66EE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={114.345}
        x2={126.077}
        y1={5.806}
        y2={20.743}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A239F4" />
        <stop offset={1} stopColor="#E0B9FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
