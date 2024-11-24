import { CSSProperties } from "react";

interface PropsType {
    style?: CSSProperties;
    color?: string;
    className?: string;
}

export const Component = (props: PropsType) => {
    return (
        <svg width="175" height="49" viewBox="0 0 175 49" fill={props.color ? props.color : "black" } xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}>
            <path d="M10.1422 35.1842L8.12999 41.604H1.27783L12.5377 7.396H19.6778L30.7498 41.604H24.0842L22.1198 35.1842H10.1422ZM16.179 16.02L11.915 29.339H20.3473L16.179 16.02Z" />
            <path d="M161.919 20.4332V21.0995C162.112 20.9706 162.305 20.8416 162.542 20.7341C163.101 20.4547 163.745 20.3043 164.433 20.3043C165.25 20.3043 165.981 20.4762 166.561 20.8416C166.969 21.078 167.313 21.4004 167.593 21.7658C168.388 20.7986 169.506 20.3043 170.881 20.3043C172.149 20.3043 173.181 20.6912 173.912 21.4649C174.621 22.2172 174.986 23.2918 174.986 24.6029V32.1899H172.665V24.8178C172.665 24.0011 172.493 23.4422 172.128 23.0554C171.762 22.6685 171.289 22.4751 170.602 22.4751C169.892 22.4751 169.42 22.6685 169.033 23.0554C168.646 23.4637 168.474 24.0011 168.474 24.7533V32.1899H166.131V24.8178C166.131 24.0011 165.959 23.4422 165.594 23.0554C165.228 22.6685 164.756 22.4751 164.068 22.4751C163.402 22.4751 162.907 22.6685 162.52 23.0554C162.133 23.4637 161.94 24.0226 161.94 24.8178V32.1899H159.619V20.4332H161.919Z" />
            <path d="M149.692 31.1366C148.853 30.3414 148.424 29.0948 148.424 27.4184V25.1831C148.424 23.5281 148.853 22.2816 149.692 21.4648C150.53 20.6911 151.669 20.2827 153.045 20.2827C154.377 20.2827 155.516 20.6911 156.333 21.4863C157.171 22.2601 157.601 23.5281 157.601 25.1831V27.4184C157.601 29.0733 157.171 30.3414 156.333 31.1151C155.516 31.9104 154.377 32.3187 153.045 32.3187C151.669 32.3187 150.53 31.9104 149.692 31.1366ZM154.678 29.5462C155.086 29.1593 155.28 28.45 155.28 27.3324V25.2691C155.28 24.1729 155.086 23.4637 154.678 23.0768C154.27 22.6684 153.754 22.475 153.045 22.475C152.292 22.475 151.755 22.6684 151.347 23.0768C150.938 23.4637 150.745 24.1944 150.745 25.2691V27.3324C150.745 28.4285 150.938 29.1593 151.347 29.5462C151.755 29.9545 152.292 30.148 153.045 30.148C153.754 30.148 154.27 29.9545 154.678 29.5462Z" />
            <path d="M138.904 31.1366C138.044 30.3414 137.614 29.0948 137.614 27.4184V25.1831C137.614 23.5281 138.044 22.2601 138.904 21.4648C139.742 20.6911 140.902 20.2827 142.278 20.2827C143.611 20.2827 144.728 20.6481 145.523 21.3789C146.34 22.1096 146.749 23.1413 146.749 24.3449V24.8822H144.47V24.3449C144.47 23.7216 144.298 23.2917 143.933 22.9693C143.546 22.6254 143.052 22.475 142.342 22.475C141.547 22.475 140.988 22.6684 140.559 23.0768C140.15 23.4637 139.935 24.1944 139.935 25.2691V27.3324C139.935 28.4285 140.15 29.1593 140.537 29.5462C140.967 29.9545 141.526 30.148 142.321 30.148C143.03 30.148 143.546 29.9975 143.933 29.6536C144.298 29.3312 144.47 28.9014 144.47 28.2781V27.7408H146.749V28.2566C146.749 29.4602 146.319 30.4918 145.502 31.2226C144.707 31.9534 143.611 32.3187 142.299 32.3187C140.902 32.3187 139.742 31.9104 138.904 31.1366Z" />
            <path d="M136.059 29.3527V32.1898H133.308V29.3527H136.059Z" />
            <path d="M130.584 21.5078C131.357 22.3031 131.766 23.5497 131.766 25.1831V27.4184C131.766 29.0519 131.379 30.2984 130.605 31.0937C129.853 31.8889 128.843 32.3188 127.661 32.3188C126.65 32.3188 125.791 32.0394 125.146 31.502V32.1898H122.825V16.5H125.146V21.164C125.318 21.0135 125.49 20.8846 125.662 20.7771C126.221 20.4547 126.844 20.2828 127.553 20.2828C128.778 20.2828 129.81 20.6911 130.584 21.5078ZM129.445 27.3324V25.2691C129.445 23.3562 128.778 22.475 127.36 22.475C126.607 22.475 126.092 22.7114 125.726 23.2058C125.339 23.7431 125.146 24.4524 125.146 25.3981V27.3109C125.146 28.1921 125.339 28.8584 125.748 29.3957C126.156 29.9116 126.672 30.148 127.446 30.148C128.8 30.148 129.445 29.2668 129.445 27.3324Z" />
            <path d="M120.806 27.0315H113.993V27.2464C113.993 28.364 114.208 29.1163 114.616 29.5247C115.046 29.9545 115.605 30.148 116.4 30.148C117.088 30.148 117.582 29.9975 117.947 29.6966C118.291 29.3957 118.442 29.0088 118.442 28.4715V27.9772H120.72V28.5145C120.72 29.6536 120.312 30.5993 119.516 31.2871C118.721 31.9749 117.625 32.3187 116.292 32.3187C114.917 32.3187 113.778 31.8889 112.94 31.0507C112.101 30.2124 111.672 28.9014 111.672 27.2034V25.3121C111.672 23.6571 112.101 22.3675 112.94 21.5293C113.778 20.7126 114.895 20.2827 116.249 20.2827C117.604 20.2827 118.721 20.7126 119.559 21.5293C120.376 22.3675 120.806 23.6571 120.806 25.3121V27.0315ZM114.595 23.0768C114.208 23.4422 114.014 24.1085 113.993 25.0756H118.485C118.485 24.0655 118.291 23.4207 117.904 23.0338C117.518 22.6469 116.98 22.475 116.249 22.475C115.519 22.475 115.003 22.6684 114.595 23.0768Z" />
            <path d="M108.622 20.4332H111.115L107.548 32.1898H105.57L103.142 24.4094L100.734 32.1898H98.7785L95.2107 20.4332H97.7039L99.8532 28.0847L102.217 20.4332H104.087L106.451 28.0847L108.622 20.4332Z" />
            <path d="M94.661 23.1628V25.4411H87.8907V23.1628H94.661Z" />
            <path d="M85.7334 16.7149V19.509H83.3262V16.7149H85.7334ZM85.6904 20.4332V32.1898H83.3692V20.4332H85.6904Z" />
            <path d="M78.2557 20.4332V21.1209C78.4276 20.9705 78.6211 20.8415 78.8145 20.7341C79.3733 20.4332 79.9966 20.2827 80.6844 20.2827C81.1142 20.2827 81.5226 20.3257 81.9095 20.4332V22.9263C81.5011 22.6469 80.9638 22.4965 80.362 22.4965C79.7387 22.4965 79.2443 22.6899 78.8575 23.1198C78.4706 23.5711 78.2772 24.1299 78.2772 24.8607V32.1898H75.9559V20.4332H78.2557Z" />
            <path d="M72.4296 21.3144C73.2033 22.0236 73.5902 23.0553 73.5902 24.3449V32.1898H71.2905V31.631C71.097 31.7599 70.8821 31.8674 70.6672 31.9749C70.1299 32.2113 69.4636 32.3187 68.7113 32.3187C67.4862 32.3187 66.4761 31.9963 65.7668 31.3945C65.036 30.7713 64.6707 29.8471 64.6707 28.6864C64.6707 27.5903 65.0575 26.7091 65.7668 26.0643C66.4761 25.4625 67.5077 25.1401 68.7543 25.1401H71.269V24.3234C71.269 23.6356 71.097 23.1843 70.7531 22.8619C70.4093 22.518 69.9149 22.3675 69.2271 22.3675C68.5609 22.3675 68.088 22.4965 67.7441 22.7759C67.4217 23.0338 67.2713 23.3562 67.2713 23.829V24.3234H64.993V23.7861C64.993 22.7329 65.4014 21.8517 66.1537 21.2284C66.9059 20.6051 67.9376 20.2827 69.2057 20.2827C70.5812 20.2827 71.6773 20.6266 72.4296 21.3144ZM70.7317 29.7396C71.097 29.3957 71.269 28.8584 71.269 28.0631V27.0745H68.9692C67.5937 27.0745 66.9919 27.5688 66.9919 28.6649C66.9919 29.7826 67.5937 30.2769 68.9477 30.2769C69.8075 30.2769 70.3878 30.105 70.7317 29.7396Z" />
            <path d="M55.9894 31.3731C55.1727 30.7068 54.7428 29.8041 54.7428 28.7079V28.1921H57.021V28.6864C57.021 29.1593 57.1715 29.5032 57.5584 29.7826C57.9452 30.062 58.4611 30.2124 59.1703 30.2124C59.9011 30.2124 60.4599 30.0835 60.8468 29.8041C61.1907 29.5462 61.3626 29.2238 61.3626 28.7294C61.3626 28.2996 61.2551 28.0417 61.0402 27.8697C60.7823 27.6548 60.331 27.4828 59.6862 27.3754L58.3321 27.139C57.193 26.924 56.3333 26.5801 55.7959 26.0858C55.2156 25.5485 54.9147 24.7747 54.9147 23.829C54.9147 22.7544 55.3231 21.8732 56.1183 21.2284C56.8921 20.6051 57.9237 20.2827 59.1273 20.2827C60.4169 20.2827 61.4916 20.5836 62.2653 21.2069C63.082 21.8302 63.5119 22.6899 63.5119 23.7001V24.2589H61.2337V23.7646C61.2337 23.3132 61.0832 23.0123 60.7393 22.7544C60.3739 22.475 59.8581 22.346 59.1703 22.346C58.5041 22.346 58.0097 22.475 57.6658 22.7544C57.3434 23.0123 57.193 23.3132 57.193 23.7646C57.193 24.1299 57.279 24.3664 57.4939 24.5383C57.7303 24.7532 58.1387 24.9252 58.7405 25.0112L60.159 25.2691C61.2981 25.484 62.1578 25.8494 62.7382 26.3652C63.34 26.881 63.6409 27.6763 63.6409 28.6435C63.6409 29.8041 63.1895 30.7498 62.3513 31.3731C61.5346 31.9963 60.4384 32.3187 59.1059 32.3187C57.8378 32.3187 56.7631 31.9963 55.9894 31.3731Z" />
            <path d="M51.8183 21.3144C52.592 22.0236 52.9789 23.0553 52.9789 24.3449V32.1898H50.6791V31.631C50.4857 31.7599 50.2708 31.8674 50.0558 31.9749C49.5185 32.2113 48.8522 32.3187 48.1 32.3187C46.8749 32.3187 45.8647 31.9963 45.1555 31.3945C44.4247 30.7713 44.0593 29.8471 44.0593 28.6864C44.0593 27.5903 44.4462 26.7091 45.1555 26.0643C45.8647 25.4625 46.8964 25.1401 48.143 25.1401H50.6576V24.3234C50.6576 23.6356 50.4857 23.1843 50.1418 22.8619C49.7979 22.518 49.3036 22.3675 48.6158 22.3675C47.9495 22.3675 47.4767 22.4965 47.1328 22.7759C46.8104 23.0338 46.66 23.3562 46.66 23.829V24.3234H44.3817V23.7861C44.3817 22.7329 44.7901 21.8517 45.5423 21.2284C46.2946 20.6051 47.3262 20.2827 48.5943 20.2827C49.9699 20.2827 51.066 20.6266 51.8183 21.3144ZM50.1203 29.7396C50.4857 29.3957 50.6576 28.8584 50.6576 28.0631V27.0745H48.3579C46.9824 27.0745 46.3806 27.5688 46.3806 28.6649C46.3806 29.7826 46.9824 30.2769 48.3364 30.2769C49.1961 30.2769 49.7764 30.105 50.1203 29.7396Z" />
        </svg>
    );
};


export default Component;