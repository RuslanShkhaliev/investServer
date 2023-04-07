import {ErrorHandler} from '@/errorHandler';
import {PortfoliosService} from '@/modules/Portfolios';
import {NextFunction, Request, Response} from 'express';
import ProfileService from './profile.service';


class ProfileController {
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const profile = await ProfileService.create()
            await PortfoliosService.create(profile.id)
            res.cookie(
                'profileId',
                profile.id,
                {httpOnly: true,sameSite: 'strict'}
            )
            .status(201)
            .json(profile);
        } catch (error) {
            next(error)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.params.profileId) {
                throw ErrorHandler.handleBadRequestError(`profileId is required`);
            }
            const profile = await ProfileService.getById(req.params.profileId);
            res.json(profile);
        } catch (error) {
            next(error)
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const profile = await ProfileService.update(req.cookies.profileId, req.body)
            res.json(profile);
        } catch (error) {
            next(error)
        }
    }
}

export default new ProfileController();
