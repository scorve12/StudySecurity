// types.d.ts
import 'jwt-decode';

declare module 'jwt-decode' {
  export interface JwtPayload {
    role?: string;  // role을 선택적 속성으로 추가
  }
}
