'use client';

import imageUrl from '@/public/sample.avif';
import { useZoomImageHover, useZoomImageWheel } from '@zoom-image/react';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Home() {
    const [tabs, setTabs] = useState([
        { name: 'Wheel', href: '#', current: true, value: 'wheel' },
        { name: 'Hover', href: '#', current: false, value: 'hover' },
        { name: 'Move', href: '#', current: false, value: 'move' },
        { name: 'Click', href: '#', current: false, value: 'click' },
    ]);

    const zoomType = useMemo(
        () => tabs.find((tab) => tab.current)?.value,
        [tabs]
    );

    console.log(zoomType);

    const imageWheelContainerRef = useRef(null);
    const imageHoverContainerRef = useRef(null);
    // const imageMoveContainerRef = useRef(null);
    const imageClickContainerRef = useRef(null);
    const zoomTargetRef = useRef(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const {
        createZoomImage: createZoomImageWheel,
        zoomImageState: zoomImageWheelState,
        setZoomImageState: setZoomImageWheelState,
    } = useZoomImageWheel();
    const { createZoomImage: createZoomImageHover } = useZoomImageHover();

    const makeHandleTabClick = (tab) => () => {
        setTabs(
            tabs.map((t) => {
                if (t.name === tab.name) {
                    return { ...t, current: true };
                } else {
                    return { ...t, current: false };
                }
            })
        );
    };

    const croppedImageClasses = useMemo(() => {
        if (zoomImageWheelState.currentRotation % 180 === 90) {
            return 'h-[200px] w-[300px]';
        } else {
            return 'h-[300px] w-[200px]';
        }
    }, [zoomImageWheelState.currentRotation]);

    useEffect(() => {
        setCroppedImage('');

        if (zoomType === 'hover') {
            const imageContainer = imageHoverContainerRef.current;
            const zoomTarget = zoomTargetRef.current;
            createZoomImageHover(imageContainer, {
                zoomImageSource: '/sample.avif',
                customZoom: { width: 300, height: 500 },
                zoomTarget,
                scale: 2,
            });
        }
    }, [zoomType]);

    function zoomInWheel() {
        setZoomImageWheelState({
            currentZoom: zoomImageWheelState.currentZoom + 0.5,
        });
    }

    function zoomOutWheel() {
        setZoomImageWheelState({
            currentZoom: zoomImageWheelState.currentZoom - 0.5,
        });
    }

    function rotate() {
        setZoomImageWheelState({
            currentRotation: zoomImageWheelState.currentRotation + 90,
        });
    }

    return (
        <div className="p-4 font-sans">
            <nav className="flex space-x-4 pb-4" aria-label="Tabs">
                <button onClick={makeHandleTabClick('hover')}>hover</button>
                {tabs.map((tab) => {
                    return (
                        <a
                            onClick={makeHandleTabClick(tab)}
                            key={tab.name}
                            href={tab.href}
                            className={
                                'decoration-none rounded-md px-3 py-2 text-sm font-medium ' +
                                (tab.current
                                    ? 'bg-gray-100 text-gray-700'
                                    : 'text-gray-500 hover:text-gray-700')
                            }
                            aria-current={tab.current ? 'page' : undefined}>
                            {tab.name}
                        </a>
                    );
                })}
            </nav>

            {zoomType === 'wheel' && (
                <div className="space-y-4">
                    <p>
                        Current zoom:{' '}
                        {`${Math.round(
                            zoomImageWheelState.currentZoom * 100
                        )}%`}
                    </p>
                    <p>Scroll inside the image to see zoom in-out effect</p>
                    <div className="flex items-center gap-4">
                        <div className="mt-1 grid h-[300px] w-[300px] place-content-center bg-black">
                            <div
                                ref={imageWheelContainerRef}
                                className="h-[300px] w-[200px] cursor-crosshair duration-500">
                                <Image
                                    className="h-full w-full"
                                    alt="Large Pic"
                                    src={imageUrl}
                                />
                            </div>
                        </div>
                        {croppedImage && (
                            <Image
                                src={croppedImage}
                                className={croppedImageClasses}
                                alt="Cropped placeholder"
                            />
                        )}
                    </div>
                </div>
            )}

            {zoomType === 'hover' && (
                <>
                    <p>Hover inside the image to see zoom effect</p>
                    <div
                        ref={imageHoverContainerRef}
                        className="relative flex h-[300px] w-[200px] items-start">
                        <Image
                            className="h-full w-full"
                            alt="Small Pic"
                            src={imageUrl}
                        />
                        <div
                            ref={zoomTargetRef}
                            className="absolute left-[350px]"></div>
                    </div>
                </>
            )}
        </div>
    );
}
