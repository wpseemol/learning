'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadComponent() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles?.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes.
        </li>
    ));

    async function submitAction(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        acceptedFiles.forEach((file, index) => {
            formData.append(`picture`, file);
        });

        // formData.forEach((file) => {
        //     console.log(file);
        // });

        console.log(formData.getAll('picture'));
    }

    return (
        <>
            <aside className="">
                <ul>{files}</ul>
            </aside>

            <form onSubmit={submitAction}>
                <div
                    {...getRootProps({
                        className: 'border-dashed border-2 border-sky-500 p-4',
                    })}>
                    <input {...getInputProps()} />
                    <p>Drag drop some files here, or click to select files</p>
                </div>
                <br />
                <Button type="submit">Submit</Button>{' '}
            </form>
        </>
    );
}
