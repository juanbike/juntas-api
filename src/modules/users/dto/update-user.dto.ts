import { IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    readonly message:string;
}
