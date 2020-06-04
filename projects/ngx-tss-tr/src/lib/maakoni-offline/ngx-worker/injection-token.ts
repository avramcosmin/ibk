// Copyright (c) [2013] [Avram Cosmin]
// Extracted for offline use from https://github.com/maakoni/ngx-worker
import {InjectionToken} from '@angular/core';
import {LoggerInterface} from './ngx-worker.interface';

export const KOLMI_LOGGER_SERVICE = new InjectionToken<LoggerInterface>('KOLMI_LOGGER_SERVICE');
