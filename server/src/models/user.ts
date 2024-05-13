export interface IUser {
    name: string;
    id: string | undefined;
    avatar?: string;
}

export class User implements IUser {
    name: string;
    id: string | undefined;
    avatar?: string;

    constructor(name: string, id?: string) {
        this.name = name;
        this.id = id;
    }
};
