'use client';

import { useZoomImageHover } from '@zoom-image/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
    const imageHoverContainerRef = useRef(null);
    const zoomTargetRef = useRef(null);

    const { createZoomImage: createZoomImageHover } = useZoomImageHover();

    useEffect(() => {
        const imageContainer = imageHoverContainerRef?.current;
        const zoomTarget = zoomTargetRef?.current;
        if (imageContainer && zoomTarget) {
            createZoomImageHover(imageContainer, {
                zoomImageSource: '/sample.avif',
                customZoom: { width: 400, height: 500 },
                zoomTarget,
                scale: 5,
            });
        }
    }, [createZoomImageHover]);

    return (
        <div className="p-4 font-sans">
            <div>
                <p>Hover inside the image to see zoom effect</p>
                <div
                    ref={imageHoverContainerRef}
                    className="relative flex h-[300px] w-[200px] items-start">
                    <Image
                        width={200}
                        height={300}
                        className="h-full w-full"
                        alt="Small Pic"
                        src="/sample.avif"
                    />
                    <div
                        ref={zoomTargetRef}
                        className="absolute left-[350px]"></div>
                </div>
            </div>
        </div>
    );
}
