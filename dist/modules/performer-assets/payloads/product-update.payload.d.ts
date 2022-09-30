import { ObjectId } from 'mongodb';
export declare class ProductUpdatePayload {
    name: string;
    description: string;
    status: string;
    type: string;
    price: number;
    stock: number;
    performerId: ObjectId;
    categoryIds: ObjectId[];
    imageIds: ObjectId[];
}
