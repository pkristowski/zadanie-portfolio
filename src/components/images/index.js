import React, { useState, useEffect } from 'react';

export default function Images() {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    const getImages = () => {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
            .then((resp) => resp.json())
            .then((data) => {
                setImages([
                    ...images,
                    ...data
                ]);
            });
    }

    const setNextPage = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        getImages();
    }, [page])

    return (
        <div>
            {images.map((image) => (
                <img style={{ width: '20%', height: '100px' }} scr={image.download_url} />
            ))}

            <button onClick={setNextPage}>Download more</button>
        </div>
    )
}

//Zadanie domowe Pobrać dane z random user!

