import React from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { OutsideLinkIcon } from "@/components/icons";

const linksCard = () => (
    <div className="linksCard card rounded-2xl p-4 bg-slate-100 card-links">
        <Logo />
        <CardLink href="https://asari-web.com">
            <p>公式サイト</p>
        </CardLink>
        <CardLink href="https://asari-web.com/rules/terms">
            <p>利用規約</p>
        </CardLink>
        <CardLink href="https://asari-web.com/rules/privacy-policy">
            <p>プライバシーポリシー</p>
        </CardLink>
        <CardLink href="https://asari-web.com/contact">
            <p>お問い合わせ</p>
        </CardLink>
    </div>
);

export const CardLink = (props: { href: string, children?: React.ReactNode }) => (
    <Link className="flex gap-4" href={props.href} target="_blank" rel="nofollow">
        {props.children}
        <OutsideLinkIcon />
    </Link>
);

export default linksCard;