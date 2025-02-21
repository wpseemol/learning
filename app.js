/**
 * Defining InterFaces
 *
 *
 */

/**
 * Interface Or Type
 *
 * UseCase
 *
 */

interface User {
    name: string;
    age: number;
    address: string;
}

interface User {
    email: string;
}

function getData(obj: User) {
    obj.email;
}
