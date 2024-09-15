'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadComponent() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const [display, setDisplay] = useState<string | null>(null);

    const router = useRouter();

    async function submitAction(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append('picture', file);
        });

        formData.append('destination', 'public/images');

        const response = await fetch('/api/v1/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.text();
            console.log(result);
            router.refresh();
            setDisplay(acceptedFiles[0]?.name || null);
        }
    }

    return (
        <>
            <aside>
                {display && (
                    <>
                        <p className="text-red-600">{`/images/${display}`}</p>
                        <Image
                            src={`/images/${display}`}
                            alt="uploaded image"
                            width={200}
                            height={200}
                        />
                    </>
                )}
            </aside>

            <form onSubmit={submitAction}>
                <div
                    {...getRootProps({
                        className: 'border-dashed border-2 border-sky-500 p-4',
                    })}>
                    <input {...getInputProps()} />
                    <p>
                        Drag and drop some files here, or click to select files
                    </p>
                </div>
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </>
    );
}
