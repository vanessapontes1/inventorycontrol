import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator";
import { IsNumber } from "class-validator";

export class UpdateProductsDTO {

    @IsNotEmpty()
    // Verificando se name recebe uma string
    @IsString()
    name: string;
    @IsNotEmpty()
    // Verificando se quantity recebe um número
    @IsNumber()
    quantity: number;
}