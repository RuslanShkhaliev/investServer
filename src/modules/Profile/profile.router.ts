import {Router} from 'express';
import ProfileController from './profile.controller';

// @ts-ignore
const profileRouter = new Router()
profileRouter.route('/')
.get(ProfileController.getById)
.post(ProfileController.create)
.patch(ProfileController.update)
export {
    profileRouter
}
