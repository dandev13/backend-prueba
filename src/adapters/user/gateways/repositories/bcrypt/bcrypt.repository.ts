import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';


@Injectable()
export class BcryptRepository {
    public resultCompare: boolean;
    public resultEncrypt: string;
    constructor() {}

    async bcryptCompare(str_input: string, str_encrypt: string) {
        try {
            this.resultCompare = bcrypt.compareSync( str_input, str_encrypt);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async bcryptEncrypt(str_input: string) {
        try {
            this.resultEncrypt = bcrypt.hashSync(str_input, 10);

            if (!this.resultEncrypt) throw new Error('Error while encrypting...');
        } catch (error) {
            throw new Error(error.message);
        }
    }
}