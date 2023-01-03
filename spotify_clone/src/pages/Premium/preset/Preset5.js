import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Fade from 'react-reveal'
export default function Preset5() {
    function gobasic() {
        window.location.href = "https://www.spotify.com/kr-ko/purchase/offer/default-basic-full-premium/?marketing-campaign-id=default&country=KR";
    }
    function goperson() {
        window.location.href = "https://www.spotify.com/kr-ko/purchase/offer/default-full-price-premium/?marketing-campaign-id=default&country=KR";
    }
    function goduo() {
        window.location.href = "https://www.spotify.com/kr-ko/purchase/offer/default-duo-master/?marketing-campaign-id=default&country=KR";
    }
    return (
        <div>
            <div className='soge5'>
                <h1>요금제 선택하기</h1>
                <p>휴대폰, 스피커 및 기타 디바이스에서 제한 없이 마음껏 들으세요.</p>
                <Fade bottom>
                <div>
                    <span className='basic'>
                        <div className='box1'>
                            <text>3개월 무료</text>
                        </div>
                        <div className='box2'>
                            <h2>베이직</h2>
                            <p>체험 기간 이후 매월 7,900원(부가세 별도) 계정 1개</p>
                        </div>
                        <div className='box3'>
                            <div className='justline'></div>
                            <div>
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' />
                            </div>
                            <div className='texting'>
                                <p>무광고로 음악 감상하기</p>
                                <p>나만의 플레이리스트</p>
                                <p>8천만 곡 감상 가능</p>
                                <p>여러 디바이스에서 감상</p>
                            </div>
                            <button className='start' onClick={gobasic}><text>시작하기</text></button>
                            <p className='dirrhks'>베이직 요금제에만 적용됩니다. 이후 매월 7,900원이 부과됩니다. 아직 Premium 구독을 해본 적이 없는 사용자만 이 혜택을 이용하실 수 있습니다. <text>약관이 적용됩니다.</text></p>
                        </div>
                    </span>

                    <span className='person'>
                        <div className='box1'>
                            <text>3개월 무료</text>
                        </div>
                        <div className='box2'>
                            <h2>개인    </h2>
                            <p>체험 기간 이후 매월 10,900원 정기결제(부가세 별도). <br/>계정 1개</p>
                        </div>
                        <div className='box3'>
                            <div className='justline'></div>
                            <div>
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' />
                            </div>
                            <div className='texting'>
                                <p>무광고로 음악 감상하기</p>
                                <p>다운로드하여 오프라인에서 감상</p>
                                <p>나만의 플레이리스트</p>
                                <p>8천만 곡 감상 가능</p>
                                <p>여러 디바이스에서 감상</p>
                            </div>
                            <button className='start' onClick={goperson}><text>시작하기</text></button>
                            <p className='dirrhks'>체험 기간 이후 매월 정기결제되고 <text>이용 약관</text>이 적용됩니다. Premium을 이미 이용해 봤다면 참여할 수 없습니다.</p>
                        </div>
                    </span>

                    <span className='duo'>
                    <div className='box1'>
                            <text>3개월 무료</text>
                        </div>
                        <div className='box2'>
                            <h2>듀오    </h2>
                            <p>매월 16,350원 정기결제(부가세 별도) <br/>계정 2개</p>
                        </div>
                        <div className='box3'>
                            <div className='justline'></div>
                            <div>
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' /><br />
                                <AiOutlineCheck size="25" className='checking' />
                            </div>
                            <div className='texting'>
                                <p>Premium 별도 계정 2개</p>
                                <p>무광고로 음악 감상하기</p>
                                <p>다운로드하여 오프라인에서 감상</p>
                                <p>나만의 플레이리스트</p>
                                <p>8천만 곡 감상 가능</p>
                                <p>여러 디바이스에서 감상</p>
                            </div>
                            <button className='start' onClick={goduo}><text>시작하기</text></button>
                            <p className='dirrhks'><text>이용 약관</text>이 적용됩니다. 아직 Premium 구독을 해본 적이 없는 사용자만 참여할 수 있습니다. 같은 주소지에 거주하는 두 사람을 위한 서비스입니다.</p>
                        </div>
                    </span>
                </div>
                </Fade>
            </div>
        </div>
    )
}