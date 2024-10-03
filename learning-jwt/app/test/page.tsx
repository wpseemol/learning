import jwt from 'jsonwebtoken';
import { Fragment } from 'react';

export default async function TestPage({
    searchParams,
}: {
    searchParams: {
        products: string;
    };
}) {
    const tokenLength = searchParams.products?.length;

    const test = jwt.decode(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBhNTY4OTgxZWYwNzk5Yjc4ODVlMmYiLCJuYW1lIjoiU2VlbW9sIENoYWtyb2JvcnRpIiwiZW1haWwiOiJzZWVtb2xjb250YWN0QGdtYWlsLmNvbSIsInBob25lIjoiODgwMTcxODg5MjM0MyIsInBob25lX2V4dHJhIjoiKzg4MDE3MDQwNDUzNjAiLCJlbWFpbF9tc2lzZG4iOm51bGwsImF2YXRhcl91cmwiOiJ1c2VyL2F2YXRhci8yMDI0LTA0LTAxVDA2LTQ3LTQ1LjE5NVotd3BzZWVtb2wgcHJpZmlsZS5qcGciLCJyb2xlIjowLCJjb3VudF9lbnJvbGwiOjEsImlkeCI6OTYxMjgsImlhdCI6MTcyNzk3NTY5OSwiZXhwIjoxNzI4MDYyMDk5fQ.7liGxf2OzJOPmJzE4bNueVi58EVjVUWBnTy4W2PmLvc'
    );

    return (
        <Fragment>
            <div>token length: {tokenLength}</div>
            <div>product list: {JSON.stringify(test)}</div>
        </Fragment>
    );
}
