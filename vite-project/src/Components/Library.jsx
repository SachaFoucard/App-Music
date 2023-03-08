import React from 'react'


export default function Library({ title, artist, artwork, id,setMusic }) {

    const select = (id) => {
        setMusic(id)
    }

    return (
        <>
            <section>
                <div className='library' onClick={(e) => select(id)}>
                    <img src={artwork} alt="image album" />
                    <div className='informations'>
                        <h3>{title}</h3>
                        <p>{artist}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
