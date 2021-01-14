import React, { useState } from 'react'
import Image from 'next/image'
const fs = require('fs')
const path = require('path')

function illustration({ images }) {
    const [showModal, setShowModal] = useState()
    const handleOpenModal = (filename) => { setShowModal(filename) }
    const handleCloseModal = () => { setShowModal() }
    return (
        <div>
            <h1>Illustrations</h1>
            {showModal &&
            <div id="backdrop" onClick={handleCloseModal}>
                    <img src={showModal} className='backdrop__image' />
            </div>
            }
            { Object.keys(images)
                .map(folder =>
                    <section key={folder}>
                        <h2>{folder}</h2>
                        <div className='flex flex-wrap illustrations'>
                            {images[folder].map((image, index) =>
                                <Image onClick={()=>handleOpenModal(`/images/illustrations/${folder}/${image}`)} className='illustration' key={`${folder}-${index}`} src={`/images/illustrations/${folder}/${image}`} width='64' height='64' objectFit='cover' />
                            )}
                        </div>
                    </section>
                )}
        </div>
    )
}

export default illustration


export async function getStaticProps() {
    const categories = fs.readdirSync(path.join(process.cwd(), '/public/images/illustrations'))
    let tmp = []
    let images = {}

    categories
        .filter(category => category != '.DS_Store')
        .forEach(category => {
            tmp = fs.readdirSync(path.join(process.cwd(), `/public/images/illustrations/${category}`))
            images[category] = tmp.filter(image => image != '.DS_Store')
        })

    return {
        props: { images },
    };
}