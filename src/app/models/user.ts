export interface User {
        id: number;
        name: string;
        age?: number;
}

export class Task {
        constructor(
                public text: string, 
                public active: boolean
        ){}
}
