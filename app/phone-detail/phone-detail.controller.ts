interface IPhoneDetailsBinding {
    phone : any;
    mainImageUrl : string;
    onImageChange : (object) => any;
}

interface IPhoneDetailsController extends IPhoneDetailsBinding {
    onImageSelect( string ) : void;
}

export default class PhoneDetailController implements IPhoneDetailsController {
    public phone : any ;
    public mainImageUrl : string ;
    public onImageChange : (object) => any;

    onImageSelect(url : string) : void {
        this.onImageChange({newImgUrl: url});
    }
}

