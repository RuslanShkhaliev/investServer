import {Types} from 'mongoose';
import {ErrorHandler} from '../../errorHandler';
import {ProfileDto, ProfileModel} from './profile.model';


class ProfileService {
    public async createProfile(profileDto: ProfileDto){
        try {
            return await ProfileModel.create(profileDto);
        } catch (error) {
            throw ErrorHandler.handleBadRequestError('Profile could not be created');
        }
    }
    public async getProfile(id: Types.ObjectId) {
       try {
           const profile = await ProfileModel.findById(id);
           if (!profile) {
               throw ErrorHandler.handleNotFoundError(`Profile with id ${id} not found`);
           }
           return profile;
       } catch (error) {
           throw ErrorHandler.handleCastError(error);
       }
    }

    public async updateProfile(id: string, profile: ProfileDto) {
        try {
            const updatedProfile = await ProfileModel.findByIdAndUpdate(id, profile, {new: true});
            if (!updatedProfile) {
                throw ErrorHandler.handleNotFoundError(`User with id ${id} not found`);
            }
            return updatedProfile;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }
}
export default new ProfileService();
