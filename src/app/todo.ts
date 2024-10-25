export interface Todo {
    id: number,
    name: string,
    prority: number,
    status: number,
    description: string;
    startDate?: Date,
    endDate?: Date,
    active: boolean
}
