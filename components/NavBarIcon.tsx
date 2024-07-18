import { IconSquareSize } from "@/types/icon-props";
export const MessageIcon = (props: IconSquareSize) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);
export const FriendsIcon = (props: IconSquareSize) => (
  <svg
    fill="#000000"
    width={props.size}
    height={props.size}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    strokeWidth="0.09600000000000001"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title></title>
      <path d="M80.8806,58.106A17.969,17.969,0,1,0,50.7979,38.4587a30.0584,30.0584,0,0,0-5.9173-4.3527,18,18,0,1,0-29.7612,0A29.8957,29.8957,0,0,0,0,60a5.9966,5.9966,0,0,0,6,6H42.1494A29.7165,29.7165,0,0,0,36,84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6A29.8957,29.8957,0,0,0,80.8806,58.106ZM66,42a6,6,0,1,1-6,6A6.0116,6.0116,0,0,1,66,42ZM24,24a6,6,0,1,1,6,6A6.0116,6.0116,0,0,1,24,24Zm6,18A18.0182,18.0182,0,0,1,46.9688,54H13.0313A18.018,18.018,0,0,1,30,42ZM49.0313,78a17.9974,17.9974,0,0,1,33.9375,0Z"></path>
    </g>
  </svg>
);
export const PrivacyIcon = (props: IconSquareSize) => (
  <svg
    fill="#000000"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    strokeWidth="0.00024000000000000003"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M21.406,5.086l-9-4a1,1,0,0,0-.812,0l-9,4A1,1,0,0,0,2,6v.7a18.507,18.507,0,0,0,9.515,16.17,1,1,0,0,0,.97,0A18.507,18.507,0,0,0,22,6.7V6A1,1,0,0,0,21.406,5.086ZM20,6.7a16.507,16.507,0,0,1-8,14.141A16.507,16.507,0,0,1,4,6.7V6.65l8-3.556L20,6.65ZM11,10h2v8H11Zm0-4h2V8H11Z"></path>
    </g>
  </svg>
);
export const ReportIcon = (props: IconSquareSize) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    strokeWidth="0.00024000000000000003"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z"
        fill={props.color}
      ></path>{" "}
    </g>
  </svg>
);
export const SettingIcon = (props: IconSquareSize) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
    stroke={props.color}
    strokeWidth="0.01024"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill={props.color}
        d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
      ></path>
    </g>
  </svg>
);
