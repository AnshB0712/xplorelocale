
import {SVGcontainer} from '../../layout-components/SVGContainer'

const SvgComponent = (props) => (
  <SVGcontainer
  style={{top:'180%'}}
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    style={{
    width:'100%',
    maxWidth:'300px',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="#E1ECFF"
      d="M132.2 301c-6.2.1-11.1 9.4-2.1 14.3 7.8 4.3 20-14.7 2.1-14.3z"
    />
    <path
      fill="#E1ECFF"
      d="M142.2 337.9c-8.5 5.9-50.8 9.1-61.6 6.5-6.5-1.5-10.4-6.5-9.3-11.7.7-3.2 3.1-6.4 7.8-9.2.4-.2.7-.4 1.1-.6 4.8-2.6-17 .6-22.4-7.4-1.1-1.7-1.8-3.4-1.8-5.1-.4-6.6 7.2-13.2 26.2-15.2 24.1-2.5 41-1.1 37.9 9.6-3.1 10.8-4 13 7.6 15.9 7.7 1.9 15.3 6.3 17 10.7 1 2.2.4 4.5-2.5 6.5z"
    />
    <path
      fill="#CAE0FF"
      d="M90.4 320.1c-1.6 2-6.8 2.8-11.3 3.4.4-.2.7-.4 1.1-.6 4.8-2.6-17 .6-22.4-7.4-1.1-1.7-1.8-3.4-1.8-5.1 1.1 1.8 3.8 3.9 10.2 4.8 12.4 1.8 26.7 1.9 24.2 4.9zM142.2 337.9c-8.5 5.9-50.8 9.1-61.6 6.5-6.5-1.5-10.4-6.5-9.3-11.7 2 2.3 7.6 6.6 21.9 6.5 19.1-.2 42.9-1 48.5-4.3 1.7-1 2.6-2.2 3.1-3.5.9 2.2.3 4.5-2.6 6.5z"
    />
    <path
      fill="#E1ECFF"
      d="M480.8 333.5c-.5 1.8-1.8 3.7-4.2 5.6-9.9 8.1-29.6 4-35.5 5.8-1.7.5-2.1 1.4-1.7 2.5 1.1 2.8 7.6 6.7 13.3 8.3 10 2.8 15.1 7.4 17 11.9 2.9 6.9-1.6 13.7-8.1 14.4-10.7 1.2-40.3-4.9-54.3-1.2s-22.2 5.9-34.1-.7c-8.5-4.7-11-12.3-9.2-18.5.7-2.5 2-4.7 3.8-6.5 6.5-6.4 19.2-2 20.3-5.3 1.1-3.3-7.9-13.7-2.7-22.1 5.2-8.4 16.3-9.5 29.9-7.2 13.6 2.3 41.4-.3 52 1.4 8.2 1.4 15.1 5.9 13.5 11.6z"
    />
    <path
      fill="#E1ECFF"
      d="M474.7 346.7c-7.8.1-11.4 6-5.3 11.2 6.1 5.2 16.6.6 16.3-3.8-.3-4.4-5.8-7.5-11-7.4z"
    />
    <path
      fill="#CAE0FF"
      d="M461.6 382.1c-10.7 1.2-40.3-4.9-54.3-1.2s-22.2 5.9-34.1-.7c-8.5-4.7-11-12.3-9.2-18.5.6 3.6 3.3 8.6 12.7 11.9 16.2 5.7 26.9-2.6 41.2-2.6 14.3 0 29.5 9.1 44.3 5.7 6.6-1.5 8-5.3 7.5-9.1 2.9 7-1.6 13.8-8.1 14.5zM480.8 333.5c-.5 1.8-1.8 3.7-4.2 5.6-9.9 8.1-29.6 4-35.5 5.8-1.7.5-2.1 1.4-1.7 2.5-.8-.2-1.6-.5-2.3-.7-6.5-2.3-7.8-6.3-1-8.6s19 .3 33.4-2.1c4.7-.7 8.5-1.6 11.3-2.5z"
    />
    <path
      fill="#FEC272"
      d="m306.2 254.4-16.8 205.8c-.1.8-.6 1.5-1.4 1.6-1.3.2-2.6-.9-2.5-2.3l16.3-205.8c.1-.9.8-1.6 1.8-1.6h.5c1.1-.1 2.2 1 2.1 2.3z"
    />
    <path
      fill="#FEA691"
      d="M358.2 261.5c-2.5 6.9-5.1 13.4-7.7 19.5-10.8 25.6-21.8 44.8-30.8 58.3-8.9 13.3-15.7 21-18.4 23.8-.7.8-1.2 1.2-1.2 1.2s-1.7.6-4.8 1.6c-6.2 1.9-17.6 5.1-30.6 6.9-2.6.4-5.3.7-7.9.9-9.7.8-19.8.7-29-1.4-3.5-.8-6.9-1.9-10.1-3.4-.1 0-.2-.1-.3-.1 0 0-9-8-21.2-21.8-17.3-19.5-41.1-50.6-55-87.3-1.7-4.4-3.1-8.9-4.4-13.5-15.6-55.4-3.1-124.6 72.1-147.4 7.9-2.4 16.6-4.3 26-5.6 2.2-.3 4.4-.6 6.5-.7 4.7-.5 9.3-.6 13.7-.6 13.4.2 25.6 2.4 36.5 6.5 64.1 23.4 87.6 105.6 66.6 163.1z"
    />
    <path
      fill="#F9917D"
      d="M350.5 281c-24.5 58.2-50.3 83.3-50.3 83.3s-1.7.6-4.8 1.6c-6.2 1.9-17.6 5.1-30.6 6.9-2.6.4-5.3.7-7.9.9-9.7.8-19.8.7-29-1.4-3.6-.9-7.2-2-10.4-3.5 0 0-52.4-46.4-76.2-109.1-1.7-4.4-3.1-8.9-4.4-13.5 19.7 17.6 57.8 41.6 120.1 43.1 47.6 1 76.4-3.5 93.5-8.3z"
    />
    <path
      fill="#FFD199"
      d="M256.8 373.6c-9.7.8-19.8.7-29-1.4-13-22-30-55.5-41.5-96.2-3.2-11.3-6-23.1-8.2-35.4-11.8-67.2 11.5-115.2 30.7-141.8 7.9-2.4 16.6-4.3 26-5.6 2.2-.3 4.4-.6 6.5-.7-8.3 12-27.4 47.5-22.9 115.8 1.7 25.8 6.7 53.2 12.8 79 8 34.1 18.2 65.4 25.6 86.3zM329.8 222.4c-.6 23.1-3.6 44.6-7.8 64.1-7.1 33-17.7 60.2-26.7 79.3-6.2 1.9-17.6 5.1-30.6 6.9 6.2-19 14.5-48.8 19-83.5 2.6-20.4 3.9-42.6 2.6-65.1-3.5-60.5-20.8-108.2-31.3-132.3 13.4.2 25.6 2.4 36.5 6.5 19.4 27.5 39.9 69.6 38.3 124.1z"
    />
    <path
      fill="#FEC272"
      d="M256.8 373.6c-9.7.8-19.8.7-29-1.4-13-22-30-55.5-41.5-96.2 12.8 4.9 27.7 9 44.8 11.3 8.1 34.1 18.3 65.4 25.7 86.3zM322 286.5c-7.1 33-17.7 60.2-26.7 79.3-6.2 1.9-17.6 5.1-30.6 6.9 6.2-19 14.5-48.8 19-83.5 15.1-.3 27.8-1.3 38.3-2.7z"
    />
    <path
      fill="#FFD199"
      d="M319.7 339.2c-8.9 13.3-15.7 21-18.4 23.8-8.4-3.7-22.3-8.3-39.9-7.6-18.6.7-34.5 8-43.6 13.3-.1 0-.2-.1-.3-.1 0 0-9-8-21.2-21.8 8.6-7.9 28.9-22.5 63.3-23.9 30-1.1 49.7 8.9 60.1 16.3z"
    />
    <path
      fill="#FEC272"
      d="M217.7 368.8s16.5-11 41.4-13.3 42.2 7.6 42.2 7.6.2 5.4-41.4 10.7c-31.4 3.9-42.2-5-42.2-5z"
    />
    <path
      fill="#FC7059"
      d="M348.3 186.6s-2.5 10.4-.8 19.4c1.7 9.1 5.8 13.6 5.8 13.6s1.3-5.3-.2-15.9c-1.6-10.5-4.8-17.1-4.8-17.1z"
    />
    <path
      fill="#FEC272"
      d="m144.7 264.4 103.7 210.2c.4.8.2 1.8-.5 2.4l-.3.3c-1 .9-2.5.6-3.1-.6l-104-210.1c-.5-1-.1-2.1.8-2.6l.7-.4c1-.6 2.2-.2 2.7.8zM207.5 259.3l56.9 208.9c.2.8-.1 1.7-.9 2.3l-.3.3c-1.2.9-2.7.6-3-.7l-57.3-208.8c-.3-.9.3-2.1 1.3-2.6l.7-.4c1.1-.5 2.3-.1 2.6 1zM358.6 251.8l-67.5 213.8c-.3.9.1 1.9.9 2.3l1.2.6c1.1.6 2.4.1 2.8-1.1l68-213.7c.3-1-.2-2-1.1-2.4l-1.6-.7c-1.1-.4-2.3.1-2.7 1.2z"
    />
    <path
      fill="#FEC272"
      d="M209.5 407.6c-.4-1.6.9-3 2.5-2.9 8.5.4 32.4 1.2 57.5-3 23.8-3.9 40.7-8.9 47.4-11 1.6-.5 3.2.6 3.3 2.3 0 1-.7 2-1.7 2.3-5.9 1.8-26 7.8-49.3 11.5-23.9 3.8-50.1 3.2-57.4 2.9-1.1 0-2.1-.8-2.3-1.9v-.2zM143.2 268l218.3-12.7c2.4-.1 4.3-2.1 4.4-4.5v-.4c.1-2.8-2.2-5-4.9-4.8l-218.3 13.2c-2.9.2-4.9 2.9-4.3 5.7.5 2.1 2.5 3.7 4.8 3.5z"
    />
    <path
      fill="#FFD199"
      d="M303.3 430.4s15 3.8 22.4 7.8c7.4 4.1 2.5 15-4.2 13.8-4.8-.9-11.8-11.9-14.3-15.3-2.5-3.3-3.9-6.3-3.9-6.3z"
    />
    <path
      fill="#F46CB4"
      d="M329.3 497.2 272 519.4l-8.2 3.2c-9.1 3.5-18.8.2-24.2-6.9-2.3-3.1-3.8-6.9-4.1-11.1l-3.6-49.5c-.2-3.8 2.1-7.2 5.8-8.3l15.4-4.6 43.2-12.9c3.6-1.1 7.4.5 9.3 3.8l.3.6 28.4 49.8c0 .1.1.2.1.3 2.6 5 .3 11.3-5.1 13.4z"
    />
    <path
      fill="#FF97C9"
      d="m272 519.4-8.2 3.2c-9.1 3.5-18.8.2-24.2-6.9-2.3-3.1-3.8-6.9-4.1-11.1l-3.2-44.2-.4-5.3v-.8c.1-3.5 2.4-6.5 5.8-7.5l15.4-4.6c.2 1.5.5 3.1.8 4.8.4 2.3.8 4.8 1.2 7.4 2.5 15.2 5.8 35 7.8 47.9.7 4.6 1.9 8.1 3.4 10.8 1.6 3.1 3.6 5.1 5.7 6.3z"
    />
    <path
      fill="#F46CB4"
      d="M255 454.5c-1.8 3-5.5 7.6-12.2 8.4-4.8.6-8.3-.8-10.6-2.4l-.4-5.3v-.8c.1-3.5 2.4-6.5 5.8-7.5l15.4-4.6c.2 1.5.5 3.1.8 4.8.3 2.2.8 4.7 1.2 7.4z"
    />
    <path
      fill="#EF54AC"
      d="M288.1 456.6c-19 5.2-33.1-2.2-33.1-2.2l-2-12.3 43.2-12.9c3.6-1.1 7.4.5 9.3 3.8l.3.6.2 1.1c.1.1 1.1 16.7-17.9 21.9z"
    />
    <path
      fill="#1C3177"
      d="m253 442.2.8 4.6s14.2 12.5 33 6.6c18.9-5.8 16-23.2 16-23.2s-2.1-1.1-4.1-1.1-6 1.3-6 1.3L253 442.2z"
    />
    <path
      fill="#1C3177"
      d="M253.8 447c-.4 1.6-2.4 9.4-9.5 11.8-7 2.4-11.6-3.3-12.5-4.5.1-3.5 2.4-6.5 5.8-7.5l15.4-4.6c.2 1.5.5 3.1.8 4.8z"
    />
    <path
      fill="#EF54AC"
      d="M329.3 497.2 272 519.4l-8.2 3.2c-9.1 3.5-18.8.2-24.2-6.9 10.9.7 19.5-.9 28.1-2.9 9.4-2.3 39.6-13.4 54-20.8 5.9-3.1 10-5.9 12.8-8.2 2.5 5 .2 11.3-5.2 13.4z"
    />
    <path
      fill="#F46CB4"
      d="m272 519.4-8.2 3.2c-9.1 3.5-18.8.2-24.2-6.9 10.3.7 18.5-.7 26.7-2.6 1.6 3.1 3.6 5.1 5.7 6.3z"
    />
    <path
      fill="#FEC272"
      d="M263.3 386.1c-9.6 1.2-16.8-7.3-10.9-14.2 5.8-6.9 7-13 7-13s11.8 6.6 13.3 13.9c1.1 5.6.3 12.1-9.4 13.3z"
    />
    <path
      fill="#FC7059"
      d="M262.6 383.6c-3.8.2-7.8-1.7-7.1-6.2s4.7-6.2 5.5-9.2c.8-3 0-4.4 0-4.4s7 5 7.8 11.6c.7 6.6-3.6 8.1-6.2 8.2z"
    />
    <path
      fill="#1C3177"
      d="m248.7 391.5-.5-4.6c-.1-1.3.7-2.4 1.9-2.7 2.3-.5 6.5-1.3 12.8-1.7 5.7-.4 9.3-.4 11.3-.3 1.2 0 2.3 1 2.4 2.2l.6 4.5c.1 1.1-.5 2.2-1.6 2.7-2.1.8-6.3 1.9-13.2 2.3-6.1.3-9.6.2-11.5 0-1.1-.2-2.1-1.2-2.2-2.4z"
    />
    <g fill="#1C3177">
      <path d="M334.9 436s20.9-19.6 28.3-18.9c4.4.4-.4 6.2-6.8 10s-21.5 8.9-21.5 8.9zM339.6 442.9c-2.6-.4-1.1-4.2 1.9-4.2s104.4 1.2 102.1 2.1c-2.2 1-101.3 2.4-104 2.1z" />
    </g>
    <g fill="#1C3177">
      <path d="m377 222.2 13.8 2.8c1.4.3 2.3 1.6 2 3.1-.3 1.4-1.8 1.5-3.2 1.2-.3-.1-.5-.2-.8-.3l-12.6-5c-.5-.3-.6-.8-.4-1.3.3-.4.8-.6 1.2-.5zM374.4 231.4l11.5 10.1c1 .8 1 2.3.2 3.3s-2.3 1-3.3.2l-.3-.3-9.4-12.1c-.3-.4-.2-1 .2-1.3.3-.2.8-.1 1.1.1z" />
    </g>
    <g fill="#1C3177">
      <path d="m360.9 158.7 3-11.8c.4-1.2 1.7-1.8 2.9-1.4 1.2.4 1.8 1.7 1.4 2.9 0 .1-.1.2-.1.2l-5.2 10.9c-.2.5-.9.8-1.4.5-.5-.2-.7-.8-.6-1.3zM366 168.1l19.5-11.5c1.1-.7 2.5-.3 3.1.7.7 1.1.3 2.5-.7 3.1-.1.1-.2.1-.3.1l-20.8 9.2c-.5.2-1.1 0-1.3-.5 0-.3.1-.8.5-1.1zM369.6 180.8l14.9-3.8c1.2-.3 2.4.3 2.7 1.3.3 1-.4 2.1-1.6 2.5-.1 0-.3.1-.4.1l-15.3 1.3c-.4 0-.8-.2-.8-.6-.1-.4.1-.7.5-.8z" />
    </g>
    <path
      fill="#E1ECFF"
      d="M428.9 201.8c-30 10.3-72.6 2.1-72.6 2.1-3.2-.5-3.9-1.5-3.4-2.6.8-1.6 4.5-3.5 7.4-4.2 8.1-1.9 20.4-3 30.1-8.9 9.8-5.9 0-15.3 6-21.4 6-6.1 14.8.7 19.3-5.7 4.2-6-14.3-14-12-21.1 2.3-7.1 9.4-7.1 9.8-15 .3-6.6 16.9-21.5 29.9-12.3 2.6 1.8 5 4.6 7.1 8.5 13.1 24 8.4 70.2-21.6 80.6z"
    />
    <path
      fill="#CAE0FF"
      d="M428.9 201.8c-30 10.3-72.6 2.1-72.6 2.1-3.2-.5-3.9-1.5-3.4-2.6 8.5.1 33.6.3 44.6-2.9 13.3-3.9 12-11.7 9.4-13s-4.7-.5-4.7-.5 1-4.7 10.4-2.9c9.2 1.8 7.4 9.3 7.3 9.6.5-.3 17.8-9.5 19.5-17.5 1.8-8.1-9.6-16.2-4.2-21.9 5.5-5.7 9.1-2.1 10.7.8 1.6 2.9 1.8 3.9 1.8 3.9s2.1-8.3 1-22.7c-.8-10.6-3.8-18.2-5.4-21.5 2.6 1.8 5 4.6 7.1 8.5 13.2 24 8.5 70.2-21.5 80.6z"
    />
    <path
      fill="#E1ECFF"
      d="M554 195.9c1.1 11.4-79.8 8.9-126.5 8.2-46.7-.7-64-.8-63.3-4.4.1-.5.9-1.1 2.2-1.7 7.6-3.4 33.3-7.8 48.9-14.5 18.3-7.8 21.1-37.1 50-36.7 15.6.2 12.1 17.9 13.3 21.7 1.2 3.7 11.5-19 26.8-14.2 15.3 4.8-1.4 27.4 1.6 29.3 2.9 1.8 42.1 1 46.6 10.9.2.4.3.9.4 1.4z"
    />
    <path
      fill="#CAE0FF"
      d="M554 195.9c1.1 11.4-79.8 8.9-126.5 8.2-46.7-.7-64-.8-63.3-4.4.1-.5.9-1.1 2.2-1.7 13.6-.4 66.4-2.3 80.2-4.6 15.9-2.6 9.4-13 9.4-13s7.6-.8 9.6 5c2.1 5.7-2.9 12-2.9 12s60.8 1.8 79.5.5c5.8-.4 9.3-1.7 11.3-3.4.3.4.4.9.5 1.4z"
    />
    <path
      fill="#E1ECFF"
      d="M472.7 218.8c-.3 1.4-.8 3-1.6 4.6-6.9 15-39.2-1.9-39.9-2.3.5.4 11.7 10.9-.5 16.4-12.4 5.6-16.8-4.5-34.8-16.7-18.1-12.3-42.1-14.2-42.1-14.2-2 0-3.4-.8-4.1-1.9-1.4-2.3.7-5.9 8.9-5.4 4.5.3 80.2-1.4 92.7.4 11.3 1.6 23.8 7.1 21.4 19.1z"
    />
    <path
      fill="#CAE0FF"
      d="M472.7 218.8c-.3 1.4-.8 3-1.6 4.6-6.9 15-39.2-1.9-39.9-2.3.5.4 11.7 10.9-.5 16.4-12.4 5.6-16.8-4.5-34.8-16.7-18.1-12.3-42.1-14.2-42.1-14.2-2 0-3.4-.8-4.1-1.9 5.3-.4 22.6-.7 40.9 9 22.1 11.6 27.6 20 34.4 15.5 6.6-4.4-1.5-14.3-1.9-14.8.3.1 6.3 2.5 21.7 5.9 13.1 2.9 22.8 1.8 27.9-1.5z"
    />
  </svg>
  <p>It seems like you have not bookmarked any place!!</p>
  </SVGcontainer>
)

export default SvgComponent
