import * as React from "react"

export default function BusItemArrow(props) {
    return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        viewBox="0 0 512 512"
        {...props}
    >
        <path d="M141.7 244.8 28 358.5l10.3 10.3C43.9 374.4 49 379 49.5 379c.6 0 47.2-46.2 103.7-102.7L256 173.5l102.8 102.8C415.3 332.8 462 379 462.5 379c.6 0 5.6-4.6 11.3-10.3l10.2-10.2-113.8-113.8C307.7 182.2 256.3 131 256 131c-.3 0-51.7 51.2-114.3 113.8z" />
    </svg>
    )
}