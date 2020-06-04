import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {
  ErrorHandlerArgsInterface,
  LoggerInterface,
  OptionsDelete,
  OptionsGet,
  OptionsI,
  OptionsPost,
  OptionsPut,
  OptionsRequest
} from '../../../../ngx-tss-tr/src/lib/maakoni-offline/ngx-worker/ngx-worker.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements LoggerInterface {

  httpErrorResponse<T>(error: HttpErrorResponse | T, errorHandlerArgs: ErrorHandlerArgsInterface<T>): void {
    console.log(error);
  }

  tap<T>(
    url: string,
    options: OptionsI | OptionsGet | OptionsPost | OptionsPut | OptionsDelete | OptionsRequest,
    errorHandlerArgs?: ErrorHandlerArgsInterface<T>
  ): void {
    console.log(url);
  }
}
