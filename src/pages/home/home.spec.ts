import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { HomePageModule } from './home.module';
import { HomePage } from './home';
//import { WishlistPage } from '../wishlist/wishlist';
//import { WishlistService } from '../../../providers/wishlist-service';
//import { Products } from '../../../providers/products';
import { ProductsMock, NavMock, WishlistServiceMock } from '../../mocks';
 
let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;
 
describe('Page: Home Page', () => {
 
    beforeEach(async(() => {

        TestBed.configureTestingModule({
 
            declarations: [MyApp],
			//declarations: [],
 
            providers: [
                {
                    provide: NavController,
                    useClass: NavMock
                } /*
                ,{ 
                    provide: Products, 
                    useClass: ProductsMock
                },
                {
                    provide: WishlistService,
                    useClass: WishlistServiceMock
                } */
            ],
 
            imports: [
                IonicModule.forRoot(MyApp),
				HomePageModule
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(HomePage);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });

    it('displays home containing a title, description, and list of features', () => {

  //      let productsService = fixture.debugElement.injector.get(Products);
  //      let firstProduct = productsService.products[0];

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('ion-list button'));
        el = de.nativeElement; 
		
		 //el = de[0];
         expect(el.textContent).toContain('Login');
/*
        expect(el.textContent).toContain(firstProduct.title);
        expect(el.textContent).toContain(firstProduct.description);
        expect(el.textContent).toContain(firstProduct.price); */

    });
/*
    it('should be able to launch wishlist page', () => {

        let navCtrl = fixture.debugElement.injector.get(NavController);
        spyOn(navCtrl, 'push');

        de = fixture.debugElement.query(By.css('ion-buttons button'));

        de.triggerEventHandler('click', null);

        expect(navCtrl.push).toHaveBeenCalledWith(WishlistPage);

    });

    it('should add product to wishlist when add to wishlist button clicked', () => {

        let wishlistService = fixture.debugElement.injector.get(WishlistService);
        spyOn(wishlistService, 'addProduct');

        let productsService = fixture.debugElement.injector.get(Products);
        let firstProduct = productsService.products[0];

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('ion-item-sliding button'));
        de.triggerEventHandler('click', null);

        expect(wishlistService.addProduct).toHaveBeenCalledWith(firstProduct);

    });
 */
});