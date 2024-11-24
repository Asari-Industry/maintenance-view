import { CSSProperties } from "react";

interface PropsType {
    style?: CSSProperties;
    color?: string;
    className?: string;
}

interface FewPropsType {
    style?: CSSProperties;
    className?: string;
}

export const AlertIcon = (props: FewPropsType) => {
    return (
        <svg width="96" height="87" viewBox="0 0 96 87" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}>
            <g>
                <path d="M41.393 3.97662C44.3294 -1.19632 51.6706 -1.1963 54.607 3.97663L94.5244 74.2962C97.461 79.4691 93.7901 85.9353 87.9176 85.9353H8.0825C2.20961 85.9353 -1.46094 79.4691 1.47551 74.2962L41.393 3.97662Z" fill="url(#paint0_radial_325_21)" />
                <path d="M43.2695 33.8199C43.0456 31.1761 43.8192 29.3735 45.5904 28.4121C46.2012 28.0717 46.9544 27.9014 47.8502 27.9014C48.746 27.9014 49.5095 28.0717 50.1406 28.4121C50.7921 28.7526 51.3214 29.1933 51.7286 29.7341C52.543 30.8356 52.8789 32.1975 52.7364 33.8199L50.9346 53.6482C50.8532 54.4293 50.5274 55.1003 49.9574 55.6611C49.4077 56.2019 48.7257 56.4722 47.9113 56.4722C47.097 56.4722 46.4251 56.2019 45.8958 55.6611C45.3665 55.1204 45.0611 54.4494 44.9796 53.6482L43.2695 33.8199ZM47.9113 61.88C49.0311 61.88 49.9879 62.2805 50.7819 63.0817C51.6167 63.8829 52.034 64.694 52.034 65.5151C52.034 66.3363 51.922 66.9875 51.6981 67.4679C51.4741 67.949 51.1688 68.3693 50.7819 68.7301C49.9879 69.5312 49.0311 69.9315 47.9113 69.9315C46.7916 69.9315 45.8347 69.5312 45.0407 68.7301C44.206 67.9289 43.7887 67.1278 43.7887 66.3266C43.7887 64.9642 44.1958 63.8829 45.0102 63.0817C45.8246 62.2805 46.7916 61.88 47.9113 61.88Z" fill="black" />
            </g>
            <defs>
                <radialGradient id="paint0_radial_325_21" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.30895 1.24938) rotate(41.9408) scale(126.706 262.676)">
                    <stop stopColor="#FFD600" />
                    <stop offset="1" stopColor="#FFB800" />
                </radialGradient>
                <clipPath id="clip0_325_21">
                    <rect width="96" height="86" fill="white" transform="translate(0 0.0969238)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const OutsideLinkIcon = (props: PropsType) => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill={props.color} xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}>
            <path d="M4.22554 15.5C3.88029 15.5 3.59204 15.3844 3.36079 15.1531C3.12954 14.9219 3.01392 14.6336 3.01392 14.2884V4.71162C3.01392 4.36637 3.12954 4.07813 3.36079 3.84688C3.59204 3.61563 3.88029 3.5 4.22554 3.5H8.43698V4.25H4.22554C4.11004 4.25 4.00423 4.29806 3.9081 4.39419C3.81198 4.49031 3.76392 4.59612 3.76392 4.71162V14.2884C3.76392 14.4039 3.81198 14.5097 3.9081 14.6058C4.00423 14.7019 4.11004 14.75 4.22554 14.75H13.8023C13.9178 14.75 14.0236 14.7019 14.1197 14.6058C14.2159 14.5097 14.2639 14.4039 14.2639 14.2884V10.0769H15.0139V14.2884C15.0139 14.6336 14.8983 14.9219 14.667 15.1531C14.4358 15.3844 14.1475 15.5 13.8023 15.5H4.22554ZM7.31779 11.7269L6.78698 11.1961L13.7331 4.25H10.5139V3.5H15.0139V8H14.2639V4.78081L7.31779 11.7269Z" fill="#484848" />
        </svg>
    );
};