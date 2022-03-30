import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Product {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    quantity: number;
    
    @ManyToOne(type => User, user => user.products, {eager: false})
    user: User;

    @Column({nullable: true})
    finishedAt: Date;
}

