import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class JwtRepository {
    public token: string;

    constructor(
        private readonly jwtService: JwtService,
        private readonly config: ConfigService
    ) {}

    async getJwtToken(payload: any): Promise<void> {
        try {
            this.token = this.jwtService.sign(payload, { secret: this.config.get('KEY_SECRET') });
        } catch (error) {
            throw new Error(error.message);
        }
    }

}