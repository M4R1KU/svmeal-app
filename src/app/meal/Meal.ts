export interface Meal {
    description: string,
    title: string,
    trimmings: string[];
    price: {
        internalPrice: number,
        externalPrice: number
    },
    provenance: string
}
