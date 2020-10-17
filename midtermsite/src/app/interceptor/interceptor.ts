import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MainInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('token');
        console.log(accessToken);
        if (accessToken) {
            const request = req.clone({
                headers: req.headers.set('Authorization', accessToken)
            });
            return next.handle(request);
        }
        else {
            return next.handle(req);
        }
    }
}
