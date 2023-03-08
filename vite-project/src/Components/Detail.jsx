import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faL } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import data from '../../public/data/songs.json'

export default function Detail({ music, setMusic, setToggle, toogle }) {

    const [thisSong, setSong] = useState({});

    const [playing, setPlaying] = useState(false);

    const [audio, setAudio] = useState(null);

    

    useEffect(() => {
        setPlaying(false)
        let obj = data.find((item) => item.id == music)
        setSong(obj)
        if (obj) {
            setAudio(new Audio(obj.url))
        }
        if (audio){
            audio.pause()
        }
    }, [music])

   
    const playByFefault = () => {
        let audio = new Audio('../../src/Assets/mp3/Powfu_Death_Bed_(thinkNews.com.ng).mp3')
        audio.play()
    }
    const PauseByDefault = () => {
        let audio = new Audio('../../src/Assets/mp3/Powfu_Death_Bed_(thinkNews.com.ng).mp3')
        audio.pause()
    }

    const lastMusic = () => {
        setPlaying(false);
        audio.pause()
        if (music <= 1) {
            music = 6;
        }
        else {
            setMusic(music - 1);
        }
    }

    const nextMusic = () => {
        setPlaying(false);
        audio.pause()
        if (music >= 6) {
            music = 1
        }
        else {
            setMusic(music + 1)
        }
    }

    const play = () => {
        if (!audio ) return;
        if (!playing) {
            audio.play();
            setPlaying(true);
        }
        else {
            audio.currentTime = 0;
            audio.pause();
            setPlaying(false);
        }
    };

    return (
        <>
            <section className='detail'>
                <div className='grid flx'>
                    <h1>Vibes</h1>
                    <button onClick={() => setToggle(!toogle)}>Library<FontAwesomeIcon icon={faMusic}/></button>
                </div>
                {
                    thisSong != undefined ?

                        <div className='detail-info'>
                            <img src={thisSong?.artwork} alt="pics Albums" />
                            <h2>{thisSong?.title}</h2>
                            <h3>{thisSong?.artist}</h3>

                            <div className="sc-dlfnbm gtijvu">
                                <input min="0" max="150.386939" type="range" className="sc-eCssSg hmocIu" />
                                <div className="sc-hKgILt cTJfRt"></div>
                            </div>

                            <span className='icons-play'>
                                <FontAwesomeIcon icon={faChevronLeft} onClick={lastMusic} />
                                {!playing ? <FontAwesomeIcon icon={faPlay} onClick={play} /> : <FontAwesomeIcon icon={faPause} onClick={play} />}
                                <FontAwesomeIcon icon={faChevronRight} onClick={nextMusic} />
                            </span>
                        </div>
                        :
                        <div className='detail-info'>
                            <img src={'https://samplesongs.netlify.app/album-arts/death-bed.jpg'} alt="pics Albums"/>
                            <h2>Death Bed</h2>
                            <h3>Powfu</h3>
                            <div></div>
                            <span className='icons-play'>
                                <FontAwesomeIcon icon={faChevronLeft} onClick={lastMusic} />
                                {!playing ? <FontAwesomeIcon icon={faPlay} onClick={playByFefault} /> : <FontAwesomeIcon icon={faPause} onClick={PauseByDefault} />}
                                <FontAwesomeIcon icon={faChevronRight} onClick={nextMusic} />
                            </span>
                        </div>
                }
            </section>
        </>
    )
}
