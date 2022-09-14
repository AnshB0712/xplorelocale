import * as React from "react"
import styled from 'styled-components'

const SvgComponent = (props) => (
  <SVGcontainer>
  <svg 
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1080 1080" 
  style={{
    width:'100%',
    maxWidth:'250px',
    }}
  {...props}>
    <defs>
      <clipPath id="clip-path">
        <path
          className="cls-1"
          d="M877.42 597.68c0 78.93-117.43 142.92-336.13 142.92s-330-64-330-142.92 111.36-142.92 330-142.92 336.13 63.99 336.13 142.92Z"
        />
      </clipPath>
      <clipPath id="clip-path-2">
        <path
          className="cls-2"
          d="M646.07 550s14.72 16.64 16.64 30.08.32 30.08 16 35.52 57 8.64 69.76-7.68 4.16-42.56-18.88-62.4c-31-27.52-66.24-29.76-66.24-29.76Z"
        />
      </clipPath>
      <clipPath id="clip-path-3">
        <path
          className="cls-2"
          d="M426.09 550s14.72 16.64 16.64 30.08.32 30.08 16 35.52 57 8.64 69.76-7.68 4.16-42.56-18.88-62.4c-31-27.52-66.24-29.76-66.24-29.76Z"
        />
      </clipPath>
      <style>
        {
          ".cls-1{fill:#f0f6ff}.cls-10,.cls-2{fill:#fec272}.cls-4,.cls-5{fill:#99adf9}.cls-4{opacity:.53}.cls-10,.cls-15{mix-blend-mode:multiply}.cls-10{opacity:.45}.cls-12{fill:#ff8d76}.cls-13{fill:#1c3177}.cls-15{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:7px;stroke:#fec272}"
        }
      </style>
    </defs>
    <g
      style={{
        isolation: "isolate",
      }}
    >
      <g id="Layer_3" data-name="Layer 3">
        <path
          className="cls-4"
          d="M161 511c12-10.21 53.72-9.21 78.13-9.21s72.56 1.08 85.81 17.88-23.54 34.69-80.49 34.69S125.37 541.34 161 511Z"
        />
        <path
          className="cls-5"
          d="M833.77 560.31s87.84 1.88 119.52 7.23 72 44.3 36.72 85.31-87.52 36.22-235.6 36.22c25.36-81.33 79.36-128.76 79.36-128.76ZM272.64 579.36s-49.13-8.06-117.1 2.24c-41.76 6.33-82.79 28.64-79 60.57 5.54 46.79 117.21 29 147 54.79s-35.13 33.32-53.34 60.32-1.65 63.64 83.43 69.21 349.42 8.41 410.49.75 98.58-79.18 1.34-117.64c-151.83-30.93-392.82-130.24-392.82-130.24Z"
        />
        <path
          className="cls-1"
          d="M877.42 597.68c0 78.93-117.43 142.92-336.13 142.92s-330-64-330-142.92 111.36-142.92 330-142.92 336.13 63.99 336.13 142.92Z"
        />
        <g
          style={{
            clipPath: "url(#clip-path)",
          }}
        >
          <path
            d="M392.3 529.79s-120.13 12.1-128.77 172.65c47.52 84.95 234.72 64.8 234.72 64.8s-7.09-162.75 57.2-251.44c133.6 4.32 228.64 3 264.64 183 73.44-37.44 79.09-118.93 79.09-118.93s-36-115.2-88.56-128.16-137.52 2.88-137.52 2.88Z"
            style={{
              fill: "#ff97c9",
              opacity: 0.36,
            }}
          />
          <path
            d="M773.29 539.61c0 38.63-80.72 69.95-231 69.95s-226.87-31.32-226.87-69.95 76.55-69.94 226.87-69.94 231 31.33 231 69.94Z"
            style={{
              mixBlendMode: "multiply",
              fill: "#e1ecff",
              opacity: 0.64,
            }}
          />
        </g>
        <path
          className="cls-2"
          d="M646.07 550s14.72 16.64 16.64 30.08.32 30.08 16 35.52 57 8.64 69.76-7.68 4.16-42.56-18.88-62.4c-31-27.52-66.24-29.76-66.24-29.76Z"
        />
        <path
          className="cls-10"
          d="M641.47 582.14s66-5.1 64.5-74.9c-50.5 2.5-76.43 37.79-76.43 37.79Z"
          style={{
            clipPath: "url(#clip-path-2)",
          }}
        />
        <path
          className="cls-2"
          d="M426.09 550s14.72 16.64 16.64 30.08.32 30.08 16 35.52 57 8.64 69.76-7.68 4.16-42.56-18.88-62.4c-31-27.52-66.24-29.76-66.24-29.76Z"
        />
        <path
          className="cls-10"
          d="M441.32 531.9s34.19 56.69 95.89 24c-24.91-44-68.09-51.33-68.09-51.33Z"
          style={{
            clipPath: "url(#clip-path-3)",
          }}
        />
        <path
          className="cls-12"
          d="M620 305.24c9 .3 37.61-1.79 49.55 33.43s21.19 60.9 37.31 83.88 32.54 64.77 0 94-70.73 22.12-88.34 13.45-38.52-23-33.44-71.93 20.6-78.8 22.39-105.67S612 316.58 620 305.24Z"
        />
        <path
          className="cls-2"
          d="M536 281.24c46.71-1.9 84.67 15.84 101.95 39.36s27.36 80.64 29.52 97.68 9.84 26.16 18 37.44c8.75 12.1 23.76 49.44 7.68 74.4S650.87 561.48 623 547.8c-28.08 11-51.94 16.64-97.3 9s-88.91-46.15-100-123.52c-6.4-44.8-6.48-99.52 15-128 35.83-9.82 51.08-22.28 95.3-24.04Z"
        />
        <path
          className="cls-12"
          d="M440.81 305.24c-9.6.32-40.32-1.92-53.12 35.84s-22.69 65.28-40 89.92-34.88 69.44 0 100.8 75.84 23.68 94.72 14.4 41.28-24.64 35.84-77.12-22.08-84.48-24-113.28-4.8-38.4-13.44-50.56Z"
        />
        <circle className="cls-13" cx={538.69} cy={428.28} r={12.96} />
        <circle className="cls-13" cx={643.97} cy={428.28} r={12.96} />
        <path
          className="cls-12"
          d="M518.4 395.37c-1-4.7 10.66-10.48 16.6-14.82s14.89-6 19.6 1.92-11.43 15.37-17.38 16.64-17.76 1.41-18.82-3.74ZM656.92 393.61c.39-4.33-9.78-8.91-15.09-12.51s-12.89-4.6-16.11 2.88 10.84 13.31 15.89 14.13 14.88.25 15.31-4.5Z"
        />
        <path
          className="cls-13"
          d="M601.69 470.84c.92-5.4 39-7.2 42.28 0s-7 25.68-17.56 25.68-27.12-11.52-24.72-25.68Z"
        />
        <path
          d="M627.42 481.16a183.27 183.27 0 0 1-1.4 30.72"
          style={{
            stroke: "#1c3177",
            fill: "none",
            strokeLinecap: "round",
            strokeMiterlimit: 10,
            strokeWidth: 7,
          }}
        />
        <path
          className="cls-15"
          d="M479.87 615.64s4.48-12-1-22.79M515.22 613.24a30.37 30.37 0 0 0-2.7-20.39M699.85 615.64s4.48-12-1-22.79M735.2 613.24a30.33 30.33 0 0 0-2.69-20.39"
        />
        <path
          className="cls-4"
          d="M794.8 737.81c12-10.22 53.71-9.22 78.13-9.22s72.56 1.09 85.81 17.89-23.54 34.68-80.49 34.68-119.04-13.01-83.45-43.35Z"
        />
      </g>
    </g>
  </svg>
   <p>
  No Comments are on this post yet.
  </p>
  </SVGcontainer>
)

const SVGcontainer = styled.div`
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     p{
       font-size: var(--title-text);
       font-weight: var(--normal);
       color: var(--lighter-text);
       text-align: center;
       
     }
`

export default SvgComponent