import {ErrorHandler} from '@/errorHandler';
import {IProfile, ProfileModel} from '@/modules/Profile/profile.model';


export class ProfileService {
    public async createProfile() {
        try {
            return await ProfileModel.create();
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }
    public async getProfile(email: string) {
       try {
           const profile = await ProfileModel.findOne({email}).populate('portfolios');
           if (!profile) {
               throw ErrorHandler.handleNotFoundError(`User with email ${email} not found`);
           }
           return profile;
       } catch (error) {
           throw ErrorHandler.handleCastError(error);
       }
    }

    public async updateProfile(id, profile: IProfile) {
        const updatedProfile = await ProfileModel.findByIdAndUpdate(id, profile, {new: true}).populate('portfolios');
    }
}
