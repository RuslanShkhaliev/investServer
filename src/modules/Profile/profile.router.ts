import {Router} from 'express';
import ProfileController from './profile.controller';

// @ts-ignore
const profileRouter = new Router()
profileRouter.route('/')
.get(ProfileController.getProfile)
.post(ProfileController.createProfile)
.patch(ProfileController.updateProfile)
export {
    profileRouter
}
