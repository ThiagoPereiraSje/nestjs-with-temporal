import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { startWorkflow } from './client';

@Controller('temporal')
export class TemporalController {
  @Post('deploy')
  async deploy(@Body() body: { client_name: string }): Promise<string> {
    const result = await startWorkflow(body.client_name).catch((error) => {
      throw new HttpException(
        `Error: ${error?.message}`,
        HttpStatus.BAD_REQUEST,
      );
    });

    return JSON.stringify(result);
  }
}
