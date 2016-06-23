import { Component,Input, Output, EventEmitter, Injectable } from '@angular/core';
import { CheckmarkPipe } from '../services/checkmark/checkmark.pipe';

@Component({
    selector: 'phone-detail',
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    pipes: [ CheckmarkPipe ]
})
@Injectable()
export class PhoneDetailComponent {
    
    @Output() onImageChange = new EventEmitter<string>() ;
    
    @Input() phone ;
    @Input() mainImageUrl: string;

    setImage(imageUrl: string) {
        this.mainImageUrl = imageUrl;
        this.onImageChange.emit(imageUrl);
    }
}
