import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductPage } from '../pages/josh/product/product';
import { HomePage } from '../pages/home/home';

import { AppModule } from './app.module';

 
let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
 
describe('Component: Root Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [],
 
            providers: [
 
            ],
 
            imports: [
                IonicModule.forRoot(MyApp),
				AppModule
				
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(MyApp);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });

    it('displays the product page to the user', () => {
         expect(comp['rootPage']).toBe(HomePage);
		 //expect(fixture).toBeTruthy();
    });
 
});