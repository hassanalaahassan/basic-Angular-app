
import { HttpClient } from '@angular/common/http';
import { TranslateCompiler, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

export function httpLoaderFactory(http:HttpClient):TranslateHttpLoader{
  return new TranslateHttpLoader(http,'../../../public/assets/i18n/','.json')
}

export function translateCompilerFactory() {
  return new TranslateMessageFormatCompiler();
}

export const translateConfig = {
      loader:{
        provide:TranslateLoader,
        useFactory:httpLoaderFactory,
        deps:[HttpClient]
      },
      compiler:{
        provide : TranslateCompiler,
        useFactory:translateCompilerFactory
      }
    }
