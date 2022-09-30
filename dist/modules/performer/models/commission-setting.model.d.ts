import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
export declare class CommissionSettingModel extends Document {
    performerId: ObjectId;
    monthlySubscriptionCommission: number;
    yearlySubscriptionCommission: number;
    videoSaleCommission: number;
    productSaleCommission: number;
    createdAt: Date;
    updatedAt: Date;
}
