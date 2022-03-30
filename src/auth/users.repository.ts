import { ConflictException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CredentialsDTO } from "./dtos/credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from "bcrypt"; 

@EntityRepository( User )
export class UsersRepository extends Repository<User> {

    async createUser(credentialsDTO: CredentialsDTO) {
        const {username, password} = credentialsDTO;

        const salt = await bcrypt.genSalt();
        const hashedPass: string = await bcrypt.hash(password, salt);

        const user = this.create({username, password: hashedPass});
        try {
            await this.save(user);
        } catch (error) {
            if(error.code == "11724") {
                throw new ConflictException('Usuário já existente');
            } else {
                throw error; 
            }
        }     
    } 
} 