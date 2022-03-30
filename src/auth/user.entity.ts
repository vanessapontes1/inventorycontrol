import { Product } from "src/products/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"; 

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    username: string;
    @Column()
    password: string

    @OneToMany(type => Product, task => task.user, {eager: true})
    products: Product[];

}