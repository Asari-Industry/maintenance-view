import Link from "next/link";
import React from "react";

import "./button.css";

interface ButtonProps {
    href: string;
    variation: "primary" | "secondary";
    className?: string;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => (
    <Link href={props.href} className={`${props.className && props.className} btn btn--${props.variation} flex g-4 items-center`}>
        {props.children}
        <svg width="19" height="19" viewBox="0 0 19 19" fill={props.variation === "primary" ? "white" : "#1155cc"} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.71162 15.0969C4.36637 15.0969 4.07813 14.9813 3.84688 14.75C3.61563 14.5188 3.5 14.2305 3.5 13.8853V4.30855C3.5 3.9633 3.61563 3.67505 3.84688 3.4438C4.07813 3.21255 4.36637 3.09692 4.71162 3.09692H8.92306V3.84692H4.71162C4.59612 3.84692 4.49031 3.89499 4.39419 3.99111C4.29806 4.08724 4.25 4.19305 4.25 4.30855V13.8853C4.25 14.0008 4.29806 14.1066 4.39419 14.2027C4.49031 14.2989 4.59612 14.3469 4.71162 14.3469H14.2884C14.4039 14.3469 14.5097 14.2989 14.6058 14.2027C14.7019 14.1066 14.75 14.0008 14.75 13.8853V9.67386H15.5V13.8853C15.5 14.2305 15.3844 14.5188 15.1531 14.75C14.9219 14.9813 14.6336 15.0969 14.2884 15.0969H4.71162ZM7.80388 11.3239L7.27306 10.793L14.2192 3.84692H11V3.09692H15.5V7.59692H14.75V4.37774L7.80388 11.3239Z" />
        </svg>
    </Link>
);

export default Button;