import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Buy groceries',
  })
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiPropertyOptional({
    example: 'Go shopping for groceries at the local market.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
