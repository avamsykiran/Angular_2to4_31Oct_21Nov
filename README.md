Pre-Requisite Skills for Angular
---------------------------------------------------------

    HTML 5              Text based eleemtns, form elements, list, tables, from validations,
                        html 5 api - WebStorage, Web Workers, GeoLocation ..etc.    
    CSAS 3              Selectors and Box Modeling and other CSS Properties
    Javascript (ES 6)
        Standard Javascript Objects
        Function, closures, Call Back, Arrow Function
        this keyword
        OOP Class, Object, Inheretence, Prototype
        Arrays and Array Prototype functions
        Asynchronous Programming like async and await, Promise, setInterval, setTimeout
        ES Modules

Angular
---------------------------------------------------------

    is a typescript based SPA framework.

    SPA - Single Page Application.

    Server                              <-----------------------REQ -- Client
        app-bundle          
        (index.html + *.js + *.css)     ----aoo-bundle (RESP---------->  index.html is loaded along with
                                                                    the assosiated JS.

                                                                    Any links, Form Submitions or Events are handled
                                                                    on the client only.

                                                                    The events handling, form submition or links will
                                                                    invoke one or more javascript functions and
                                                                    those will generate new html content and it replaces
                                                                    the older content on the index.html

                                                                    as a result no page unload or reload is needed.

        rest-api        <-----------json/xml------------------>     sharing data from/to the client


    Lab Setup
    ---------------------------------------------------------
        VSCode          IDE
        NodeJS          dev-env                                         https://nodejs.org                      node --version
        Angular CLI     project strucutre management / Build Env        npm -g install @angular/cli@13.3.3      ng version
        Chrome          executing

    Angular CLI
    ---------------------------------------------------------
        Angular CLI - Commanbd Line Interface is a frotier of many tools,
        using which we can create and manage the angular application structure and
        also trigger operations like building, executing, testing and so on .

        ng new project-name

        project-name\> ng serve                     compiles, and builds a bundle and launches a dev-server on 4300 port.
        project-name\> ng serve --port 9999 -o      compiles, and builds a bundle and launches a dev-server on 9999 port.
        project-name\> ng build                     compiles, and builds a bundle and is stroed in 'dist' folder.
        project-name\> ng test                      compiles, build and execute the test cases.

        project-name\> ng generate module ModuleName
        project-name\> ng generate component ComponentName
        project-name\> ng g c ComponentName --skip-tests
        project-name\> ng g service ServiceName --skip-tests
        project-name\> ng g directive DirectiveName --skip-tests
        project-name\> ng g pipe PipeName --skip-tests
        project-name\> ng g class ClassName --skip-tests
        project-name\> ng g guard GuardName --skip-tests
        project-name\> ng g interceptor InterceptorName --skip-tests
        project-name\> ng g interface InterfaceName

    Angular Archetecture
    -----------------------------------------------------------

        An angular application is made up of a variety of resources.
        Each angular resource is a typescript class.
        Each class is marked witha decorator to identify its role.
        Each decorator is given a json object. And that is called meta-data which offers the resource config.

        Modules
                @NgMNodule({
                    declarations:[],
                    exports:[],
                    imports:[],
                    providers:[],
                    bootstrap:[]
                })
                class SalesModule{}

                Angular Modules are different from Javascript Modules, they lay side by side in angular app.
                Each .js file or .ts file is a javascript module.
                Angular Module are typescript classes that logical repressnt a cohesive group of components,directives,pipes and services.

                Each angular app must be wrapped insdie a top-level module called 'root-module' generally represented by
                'app.module.ts' file. Modules other than root-module are called 'feature-module'.

                declarations        holds the list of components, pipes and directive that belong to this module.
                exports             holds the list of components, pipes and directive that belong to this module and are allowed
                                    to be accessed outside this module
                imports             holds a list of other modules, whsoe resoruce we will access in the current module.
                providers           holds a list of service belonging to the current module.
                bootstrap           holds the top-level component to be rendered on the screen immidiatly after the current 
                                    module is loaded

        Component Directives

                a component is a new html element defiend using angular.

                Component =     class                       +       template        +       styleSheet
                            state and behaviour                   html - dom                css styles  
                            fields make up the state
                            methods make up the behaviour


                login.component.ts
                -------------------------
                    @Component({
                        selector:'app-login',
                        templateUrl:'login.component.html',
                        styleUrls:[]
                    })
                    class DashboardComponent {
                        userName:string;
                        password:string;

                        constructor(){
                            this.userName='';
                            this.password:'';
                        }

                        handleSubmit(){
                            /* we need to handle the form submit event */
                        }
                    }


                login.component.html
                -----------------------------
                    <form>
                        <label>UserName : <input type="text" /> </label>
                        <label>Passord : <input type="password" /> </label>
                        <button>Sign In</button>
                    </form>


                <app-login></app-login>

                Data Binding
                ---------------------------

                    Interpolation
                        injecting the value of a field or expression into html dom using {{}}.

                        <p>Hello {{userName}}, welcome to our app.</p>

                     Two-way data binding

                            only to handle form-elements like input,select,textarea ..etc.,
                            for this we use 'ngModel' attribute directive from 'FormsModule' module.

                            <input name="tb1" [(ngModel)]="userName" />

                    One-way data binding
                        attribute binding

                            allows to bind the value of a field to an attribute using []

                            <table width="250"></table>
                            <table [width]="x"></table>

                        style binding
                            allows to bind the value of a field to a css-property using []

                            <table style="background-color:#ff00ff"></table>
                            <table [style.backgroundColor]="bgColor"></table>

                        class binding
                            allows to bind the value of a boolean field to a class name using []

                            <table class="table-bordered table-striped"></table>
                            <table [class.tableBordered]="booleanField1" [class.tableStriped]="booleanField2"></table>

                        event binding
                            allows us to bind amethod with an html event using ().

                            <button (click)="method1()"></button>                

        Attribute Directives
        
                ngModel, click, ...etc.,

                @Directive({
                    selector:''
                })
                class FastMovingStock {}
        
        Structural Directives 

            *ngIf
            *ngFor
            ngSwitch

        Services
                @Injectable({
                    providedIn:'root'
                })
                class SalesService {}

        Pipes
                is used to tranform a value into another just before rendering!!

                lowercase
                uppercase
                titlecase
                number
                currency
                date

                @Pipe({
                    name:''
                })
                class ToWordsPipe {}

        Guards  
                @Injectable()
                class AdminUsersGuard {}

        Interceptors
                @Injectable()
                class JwtTokenInterceptor {}
         ...etc.,



                                         

    