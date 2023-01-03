import { useEffect, useState } from 'react';
import TextTransition, { presets } from "react-text-transition";
export default function Preset3() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            1500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    const TEXTS = [
        "국내 인기곡",
        "해외 아티스트",
        "최신 음악",
        "불후의 명곡"
    ];
    const TEXTSE = [
        "국내 아티스트의 인기가요를 들어보세요.",
        "전 세계 음악을 둘러보세요.",
        "지금 막 출시된 따끈따끈한 음악을 만나보세요.",
        "어떤 무드에든 어울리는 음악을 찾아보세요."
    ];
    return(
        <div>
            <div className='soge3'>
                <h1>새로운 <text>음악 문화를<br/> 경험</text>해보세요.</h1>
                <video loop autoPlay muted id="premiums">
                    <source src='video/premium.mp4' type="video/mp4" />
                </video>
                <TextTransition springConfig={presets.stiff} className='changet'>
                        {TEXTS[index % TEXTS.length]}<br/><br/>
                        {TEXTSE[index % TEXTSE.length]}
                </TextTransition>
            </div>
        </div>
    )
}