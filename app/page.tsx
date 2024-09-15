'use client';

interface DataBass {
    name: string;
    imgUrl: string;
}

interface DataWightDes extends Omit<DataBass, 'imgUrl'> {
    name: string;
    des: string;
}

function test(winch?: 'wightDes') {
    switch (winch) {
        case 'wightDes':
            return {
                name: 'seemol Chakroborti',
                des: 'some description',
            } as DataWightDes;

        default:
            return {
                name: 'seemol chakroborti',
                imgUrl: 'image url',
            } as DataBass;
    }
}

export default function Home() {
    const wightDes = test('wightDes') as DataWightDes;
    const wightOut = test() as DataBass;

    return (
        <main className="m-3">
            <div>
                without : {JSON.stringify(wightOut.imgUrl)}
                wightDes : {JSON.stringify(wightDes.des)}
            </div>
        </main>
    );
}
