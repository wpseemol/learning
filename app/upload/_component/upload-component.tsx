import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UploadComponent() {
    async function submitAction(formData: FormData) {
        'use server';
        const data = {
            picture: formData.get('picture'),
        };

        console.log(data);
    }

    return (
        <form action={submitAction}>
            <div>
                <label htmlFor="picture"></label>
                <Input id="picture" name="picture" type="file" required />
            </div>
            <br />
            <Button type="submit">Submit</Button>{' '}
        </form>
    );
}
