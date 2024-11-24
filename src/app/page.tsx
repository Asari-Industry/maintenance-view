"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AlertIcon } from "@/components/icons";
import Button from "@/components/button/button";
import LinksCard from "@/components/linksCard/linksCard";

function Time() {
    const searchParams = useSearchParams();
    let since = searchParams.get("since");
    let until = searchParams.get("until");
    if (!since) since = "未定";
    if (!until) until = "未定";

    return (
        <h2>
            {since} ~ <br />{until}
        </h2>
    );
}

const Page = () => (
    <div className="flex items-center w-full h-full justify-center p-2">
        <div className="flex gap-4 items-end">
            <div className="card rounded-2xl p-4 bg-slate-100">
                <AlertIcon />
                <h1>このサービスは、<br />現在メンテナンスを<br />行っています。</h1>
                <p>ご迷惑をおかけします。<br />メンテナンスについての情報は、<wbr />メンテナンスサイトから<wbr />ご確認いただけます。</p>
                <Button variation='primary' href="https://meintenances.asari-web.com">メンテナンスサイト</Button>
                <Button variation="secondary" href="https://asari.statuspage.io/">サービス稼働状況</Button>
                <div className="bg-white p-2 rounded-xl mainteTime">
                    <p className="text-neutral-700">メンテナンス時間</p>
                    <Suspense>
                        <Time />
                    </Suspense>
                </div>
                <p className="text-neutral-700">メンテナンスの終了時刻は前後することがあります。</p>
            </div>
            <LinksCard />
        </div>
    </div>
);

export default Page;