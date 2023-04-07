import {ErrorHandler} from '../../errorHandler';
import {ProfileDto} from './profile.dto';
import {ProfileEntity} from './profile.entity';
import {IProfileModel, ProfileModel} from './profile.model';


class ProfileService {
    public async create() {
        try {
            const profileEntity = new ProfileEntity();
            const profile = await ProfileModel.create(profileEntity) as IProfileModel;
            return new ProfileDto(profile);
        } catch (error) {
            throw ErrorHandler.handleBadRequestError('Profile could not be created');
        }
    }
    public async getById(id: string) {
       try {
           const profile = await ProfileModel.findById(id) as IProfileModel;
           if (!profile) {
               throw ErrorHandler.handleNotFoundError(`Profile with id ${id} not found`);
           }
           return new ProfileDto(profile);
       } catch (error) {
           throw ErrorHandler.handleCastError(error);
       }
    }

    public async update(id: string, profile: Partial<ProfileDto>) {
        try {
            const profileEntity = new ProfileEntity(profile);
            const updatedProfile = await ProfileModel.findByIdAndUpdate(id, profileEntity, {new: true}) as IProfileModel;
            if (!updatedProfile) {
                throw ErrorHandler.handleNotFoundError(`User with id ${id} not found`);
            }
            return new ProfileDto(updatedProfile);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }
}
export default new ProfileService();
