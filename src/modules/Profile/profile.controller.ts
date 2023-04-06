import {PortfoliosDto, PortfoliosService} from '@/modules/Portfolios';
import {ProfileDto} from '@/modules/Profile/profile.model';
import {NextFunction, Request, Response} from 'express';
import ProfileService from './profile.service';


class ProfileController {
    public async createProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const profileDto = new ProfileDto();
            const profile = await ProfileService.createProfile(profileDto)
            const profileId = profile._id.toString()
            const portfoliosDto = new PortfoliosDto({profileId});
            await PortfoliosService.createPortfolios(portfoliosDto)

            res.cookie('profileId', profileId, {
                httpOnly: true,
                sameSite: 'strict',
            })
            res.json(profile);
        } catch (error) {
            next(error)
        }
    }

    public async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const profile = await ProfileService.getProfile(req.cookies['profileId']);
            res.json(profile);
        } catch (error) {
            next(error)
        }
    }

    public async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const {_id} = req.body;
            const profile = await ProfileService.updateProfile(_id, req.body)
            res.json(profile);
        } catch (error) {
            next(error)
        }
    }
}

export default new ProfileController();
