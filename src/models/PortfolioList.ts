import mongoose from 'mongoose';


export interface PortfolioListModel {
    name: string;
    description?: string;
    assets: [],
}

const portfolioListSchema = new mongoose.Schema({
    name: String,

})
